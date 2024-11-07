import { Body, Controller, Get, Param, Post, Render, Req, Request, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginResponse, RefreshResponse, RegisterResponse } from './interfaces';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ForgotPasswordDto, LoginDto, RefreshDto, RegisterDto } from './dtos';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    #_service: AuthService;

    constructor(service: AuthService) {
        this.#_service = service;
    }

    @ApiOperation({ summary: 'Login qilish' })
    @Post('/login')
    async signIn(
        @Body() payload: LoginDto,
        @Request() req: Request
    ): Promise<LoginResponse> {
        return await this.#_service.login(payload, req);
    }

    @ApiOperation({ summary: 'Register qilish' })
    @Post('/register')
    async signUp(
        @Body() payload: RegisterDto,
        @Request() req: Request
    ): Promise<RegisterResponse> {
        return await this.#_service.register(payload, req);
    }

    @ApiOperation({ summary: 'Refresh tokenni yangilash' })
    @Post('/refresh')
    async refresh(@Body() payload: RefreshDto): Promise<RefreshResponse> {
        return await this.#_service.refresh(payload);
    }

    @Post('/forgot-password')
    async forgotPassword(@Body('email') email: string): Promise<{ message: string }> {
        await this.#_service.forgotPassword(email);
        return { message: 'OTP has been sent to your email.' };
    }

    @Post('/reset-password')
    async resetPassword(
        @Body('email') email: string,
        @Body('otp') otp: string,
        @Body('newPassword') newPassword: string
    ): Promise<{ message: string }> {
        await this.#_service.validateOtpAndResetPassword(email, otp, newPassword);
        return { message: 'Your password has been reset successfully.' };
    }



    @Get('reset-password/:token')
    @Render('reset-password')
    async getResetPasswordPage(@Param('token') token: string) {
        return { token };
    }

    // @Post('reset-password/:token')
    // async resetPassword(@Param('token') token: string, @Body('password') password: string) {
    //     await this.#_service.resetPassword(token, password);
    //     return { message: 'Password successfully reset' };
    // }

    @Get('/google')
    async googleAuth() { }

    @Get('/google/callback')
    async googleAuthCallback(@Req() request: any) {
        return this.#_service.googleAuth(request);
    }
}