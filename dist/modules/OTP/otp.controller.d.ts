import { OtpService } from './otp.service';
import { OtpCreateDto, OtpValidateDto } from './dtos';
export declare class OtpController {
    private readonly otpService;
    constructor(otpService: OtpService);
    generateOtp(otpCreateDto: OtpCreateDto): {
        message: string;
        otp: string;
    };
    validateOtp(otpValidateDto: OtpValidateDto): {
        message: string;
    };
}
