import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user';
import { LoginRequest, LoginResponse, RefreshRequest, RefreshResponse, RegisterRequest, RegisterResponse } from './interfaces';
import { UserDevice } from '../user_device';
import { MailerService } from '../mailer';
import { OtpService } from '../OTP';
export declare class AuthService {
    private userModel;
    private userDeviceModel;
    private mailerService;
    private otpService;
    private config;
    private jwt;
    constructor(userModel: typeof User, userDeviceModel: typeof UserDevice, mailerService: MailerService, otpService: OtpService, config: ConfigService, jwt: JwtService);
    login(payload: LoginRequest, req: Request): Promise<LoginResponse>;
    register(payload: RegisterRequest, req: Request): Promise<RegisterResponse>;
    logout(): Promise<void>;
    refresh(payload: RefreshRequest): Promise<RefreshResponse>;
    forgotPassword(email: string): Promise<void>;
    resetPassword(token: string, newPassword: string): Promise<void>;
    validateOtpAndResetPassword(email: string, otp: string, newPassword: string): Promise<void>;
    googleAuth(req: any): Promise<{
        accessToken: string;
        user: User;
        isNew: boolean;
    }>;
}
