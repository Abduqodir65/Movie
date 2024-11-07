import { AuthService } from './auth.service';
import { LoginResponse, RefreshResponse, RegisterResponse } from './interfaces';
import { LoginDto, RefreshDto, RegisterDto } from './dtos';
export declare class AuthController {
    #private;
    constructor(service: AuthService);
    signIn(payload: LoginDto, req: Request): Promise<LoginResponse>;
    signUp(payload: RegisterDto, req: Request): Promise<RegisterResponse>;
    refresh(payload: RefreshDto): Promise<RefreshResponse>;
    forgotPassword(email: string): Promise<{
        message: string;
    }>;
    resetPassword(email: string, otp: string, newPassword: string): Promise<{
        message: string;
    }>;
    getResetPasswordPage(token: string): Promise<{
        token: string;
    }>;
    googleAuth(): Promise<void>;
    googleAuthCallback(request: any): Promise<{
        accessToken: string;
        user: import("..").User;
        isNew: boolean;
    }>;
}
