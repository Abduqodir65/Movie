"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const user_1 = require("../user");
const user_device_1 = require("../user_device");
const mailer_1 = require("../mailer");
const OTP_1 = require("../OTP");
let AuthService = class AuthService {
    constructor(userModel, userDeviceModel, mailerService, otpService, config, jwt) {
        this.userModel = userModel;
        this.userDeviceModel = userDeviceModel;
        this.mailerService = mailerService;
        this.otpService = otpService;
        this.config = config;
        this.jwt = jwt;
    }
    async login(payload, req) {
        const foundedUser = await this.userModel.findOne({
            where: { email: payload.email, password: payload.password },
        });
        if (!foundedUser) {
            throw new common_1.NotFoundException('User not found');
        }
        const accessToken = await this.jwt.signAsync({ id: foundedUser.id, role: foundedUser.role }, {
            expiresIn: this.config.get('jwt.accessTime'),
            secret: this.config.get('jwt.accessKey'),
        });
        const refreshToken = await this.jwt.signAsync({ id: foundedUser.id, role: foundedUser.role }, {
            expiresIn: this.config.get('jwt.refreshTime'),
            secret: this.config.get('jwt.refreshKey'),
        });
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
    async register(payload, req) {
        const newUser = await this.userModel.create({
            username: payload.username,
            email: payload.email,
            password: payload.password,
        });
        const accessToken = await this.jwt.signAsync({ id: newUser.id, role: newUser.role }, {
            expiresIn: this.config.get('jwt.accessTime'),
            secret: this.config.get('jwt.accessKey'),
        });
        const refreshToken = await this.jwt.signAsync({ id: newUser.id, role: newUser.role }, {
            expiresIn: this.config.get('jwt.refreshTime'),
            secret: this.config.get('jwt.refreshKey'),
        });
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
    async refresh(payload) {
        try {
            this.jwt.verify(payload.refreshToken, { secret: this.config.get('jwt.refreshKey') });
        }
        catch (error) {
            if (error instanceof jwt_1.TokenExpiredError) {
                throw new common_1.UnprocessableEntityException("Token already expired");
            }
            if (error instanceof jwt_1.NotBeforeError) {
                throw new common_1.ConflictException("Token not before error");
            }
            if (error instanceof jwt_1.JsonWebTokenError) {
                throw new common_1.BadRequestException(error.message);
            }
            throw new common_1.InternalServerErrorException("Internal error occurred");
        }
        const userDecodedData = this.jwt.decode(payload.refreshToken);
        const accessToken = await this.jwt.signAsync({
            id: userDecodedData?.id,
            role: userDecodedData?.role,
        }, {
            expiresIn: this.config.get('jwt.accessTime'),
            secret: this.config.get('jwt.accessKey'),
        });
        const refreshToken = await this.jwt.signAsync({
            id: userDecodedData?.id,
            role: userDecodedData?.role,
        }, {
            expiresIn: this.config.get('jwt.refreshTime'),
            secret: this.config.get('jwt.refreshKey'),
        });
        return {
            message: 'successfully refresh',
            accessToken,
            refreshToken,
        };
    }
    async forgotPassword(email) {
        const user = await user_1.User.findOne({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const otpData = this.otpService.generateOtpWithExpiry(10);
        this.otpService.storeOtp(email, otpData);
        await this.mailerService.sendMail('Admin', email, 'Your Password Reset OTP', `<p>Your OTP for password reset is: <strong>${otpData.otp}</strong>. It expires in 10 minutes.</p>`);
        console.log('OTP sent to:', email);
    }
    async resetPassword(token, newPassword) {
        const user = await user_1.User.findOne({ where: { passwordResetToken: token } });
        if (!user || user.passwordResetTokenExpireTime < new Date()) {
            throw new common_1.NotFoundException('Token is invalid or has expired');
        }
        user.password = newPassword;
        user.passwordResetToken = null;
        user.passwordResetTokenExpireTime = null;
        await user.save();
    }
    async validateOtpAndResetPassword(email, otp, newPassword) {
        const isOtpValid = this.otpService.validateOtp(email, otp);
        if (!isOtpValid) {
            throw new common_1.BadRequestException('Invalid or expired OTP');
        }
        const user = await user_1.User.findOne({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        user.password = newPassword;
        user.passwordResetToken = null;
        user.passwordResetTokenExpireTime = null;
        await user.save();
        console.log('Password has been reset successfully for:', email);
    }
    async googleAuth(req) {
        console.log(req.user);
        const foundeduser = await this.userModel.findOne({
            where: {
                email: req.user.emails[0].value,
            }
        });
        if (foundeduser) {
            const accessToken = this.jwt.sign({ id: foundeduser.id, name: foundeduser.username }, { secret: 'my-secret-key' });
            return { accessToken, user: foundeduser, isNew: false };
        }
        const newUser = await this.userModel.create({
            name: req.user.displayName,
            email: req.user.emails[0].value,
            image: req.user.photos[0].value,
        });
        const accessToken = this.jwt.sign({ id: newUser.id, name: newUser.username }, { secret: 'my-secret-key' });
        return { accessToken, user: newUser, isNew: true };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_1.User)),
    __param(1, (0, sequelize_1.InjectModel)(user_device_1.UserDevice)),
    __metadata("design:paramtypes", [Object, Object, mailer_1.MailerService,
        OTP_1.OtpService,
        config_1.ConfigService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map