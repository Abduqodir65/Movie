import { BadRequestException, ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';
import { JsonWebTokenError, JwtService, NotBeforeError, TokenExpiredError } from '@nestjs/jwt';
import { User } from '../user';
import { LoginRequest, LoginResponse, RefreshRequest, RefreshResponse, RegisterRequest, RegisterResponse } from './interfaces';
import { UserDevice } from '../user_device';
import { MailerService } from '../mailer';
import { OtpService } from '../OTP';
import * as crypto from 'crypto';


@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User) private userModel: typeof User,
        @InjectModel(UserDevice) private userDeviceModel: typeof UserDevice,
        private mailerService: MailerService,
        private otpService: OtpService,
        private config: ConfigService,
        private jwt: JwtService,
    ) { }

    async login(payload: LoginRequest, req: Request): Promise<LoginResponse> {
        const foundedUser = await this.userModel.findOne({
            where: { email: payload.email, password: payload.password },
        });

        if (!foundedUser) {
            throw new NotFoundException('User not found');
        }

        const accessToken = await this.jwt.signAsync(
            { id: foundedUser.id, role: foundedUser.role },
            {
                expiresIn: this.config.get<number>('jwt.accessTime'),
                secret: this.config.get<string>('jwt.accessKey'),
            },
        );

        const refreshToken = await this.jwt.signAsync(
            { id: foundedUser.id, role: foundedUser.role },
            {
                expiresIn: this.config.get<number>('jwt.refreshTime'),
                secret: this.config.get<string>('jwt.refreshKey'),
            },
        );

        await this.userDeviceModel.create({
            userId: foundedUser.id,
            loginTime: new Date(),
            device: req.headers['user-agent'],
        });

        return {
            message: 'Successfully logged in',
            accessToken,
            refreshToken,
        };
    }


    async register(payload: RegisterRequest, req: Request): Promise<RegisterResponse> {
        const newUser = await this.userModel.create({
            username: payload.username,
            email: payload.email,
            password: payload.password,
        });

        const accessToken = await this.jwt.signAsync(
            { id: newUser.id, role: newUser.role },
            {
                expiresIn: this.config.get<number>('jwt.accessTime'),
                secret: this.config.get<string>('jwt.accessKey'),
            },
        );

        const refreshToken = await this.jwt.signAsync(
            { id: newUser.id, role: newUser.role },
            {
                expiresIn: this.config.get<number>('jwt.refreshTime'),
                secret: this.config.get<string>('jwt.refreshKey'),
            },
        );

        await this.userDeviceModel.create({
            userId: newUser.id,
            loginTime: new Date(),
            device: req.headers['user-agent'],
        });

        return {
            message: 'Successfully registered',
            accessToken,
            refreshToken,
        };
    }


    async logout() { }

    async refresh(payload: RefreshRequest): Promise<RefreshResponse> {
        try {
            this.jwt.verify(payload.refreshToken, { secret: this.config.get<string>('jwt.refreshKey') })
        } catch (error) {
            if (error instanceof TokenExpiredError) {
                throw new UnprocessableEntityException("Token already expired")
            }

            if (error instanceof NotBeforeError) {
                throw new ConflictException("Token not before error")
            }

            if (error instanceof JsonWebTokenError) {
                throw new BadRequestException(error.message)
            }

            throw new InternalServerErrorException("Internal error occurred")
        }

        const userDecodedData = this.jwt.decode(payload.refreshToken)

        const accessToken = await this.jwt.signAsync(
            {
                id: userDecodedData?.id,
                role: userDecodedData?.role,
            },
            {
                expiresIn: this.config.get<number>('jwt.accessTime'),
                secret: this.config.get<string>('jwt.accessKey'),
            },
        );

        const refreshToken = await this.jwt.signAsync(
            {
                id: userDecodedData?.id,
                role: userDecodedData?.role,
            },
            {
                expiresIn: this.config.get<string>('jwt.refreshTime'),
                secret: this.config.get<string>('jwt.refreshKey'),
            },
        );

        return {
            message: 'successfully refresh',
            accessToken,
            refreshToken,
        };
    }

    async forgotPassword(email: string): Promise<void> {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw new NotFoundException('User not found');
        }

        const otpData = this.otpService.generateOtpWithExpiry(10);
        this.otpService.storeOtp(email, otpData);

        await this.mailerService.sendMail(
            'Admin',
            email,
            'Your Password Reset OTP',
            `<p>Your OTP for password reset is: <strong>${otpData.otp}</strong>. It expires in 10 minutes.</p>`
        );

        console.log('OTP sent to:', email);
    }

    async resetPassword(token: string, newPassword: string): Promise<void> {
        const user = await User.findOne({ where: { passwordResetToken: token } });

        if (!user || user.passwordResetTokenExpireTime < new Date()) {
            throw new NotFoundException('Token is invalid or has expired');
        }

        user.password = newPassword; 
        user.passwordResetToken = null;
        user.passwordResetTokenExpireTime = null;

        await user.save();
    }

    async validateOtpAndResetPassword(email: string, otp: string, newPassword: string): Promise<void> {
        const isOtpValid = this.otpService.validateOtp(email, otp);
        if (!isOtpValid) {
            throw new BadRequestException('Invalid or expired OTP');
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new NotFoundException('User not found');
        }

        user.password = newPassword;
        user.passwordResetToken = null;
        user.passwordResetTokenExpireTime = null;
        await user.save();

        console.log('Password has been reset successfully for:', email);
    }


    async googleAuth(req: any) {
        console.log(req.user);

        const foundeduser = await this.userModel.findOne({
            where: {
                email: req.user.emails[0].value,
            }
        });

        if (foundeduser) {
            const accessToken = this.jwt.sign(
                { id: foundeduser.id, name: foundeduser.username },
                { secret: 'my-secret-key' },
            );
            return { accessToken, user: foundeduser, isNew: false };
        }

        const newUser = await this.userModel.create({
            name: req.user.displayName,
            email: req.user.emails[0].value,
            image: req.user.photos[0].value,
        });

        const accessToken = this.jwt.sign(
            { id: newUser.id, name: newUser.username },
            { secret: 'my-secret-key' },
        );
        return { accessToken, user: newUser, isNew: true };
    }
}