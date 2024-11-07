import { OtpData } from './interfaces';
export declare class OtpService {
    private otpStorage;
    private generateOtp;
    generateOtpWithExpiry(minutes: number): OtpData;
    storeOtp(email: string, otpData: OtpData): void;
    getOtp(email: string): OtpData | undefined;
    validateOtp(email: string, otp: string): boolean;
}
