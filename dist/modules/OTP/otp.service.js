"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpService = void 0;
const common_1 = require("@nestjs/common");
let OtpService = class OtpService {
    constructor() {
        this.otpStorage = new Map();
    }
    generateOtp(length = 6) {
        const digits = '0123456789';
        let otp = '';
        for (let i = 0; i < length; i++) {
            otp += digits[Math.floor(Math.random() * digits.length)];
        }
        return otp;
    }
    generateOtpWithExpiry(minutes) {
        const otp = this.generateOtp();
        const expiresAt = new Date();
        expiresAt.setMinutes(expiresAt.getMinutes() + minutes);
        return { otp, expiresAt };
    }
    storeOtp(email, otpData) {
        this.otpStorage.set(email, otpData);
    }
    getOtp(email) {
        return this.otpStorage.get(email);
    }
    validateOtp(email, otp) {
        const storedOtpData = this.getOtp(email);
        if (!storedOtpData)
            return false;
        const isExpired = new Date() > storedOtpData.expiresAt;
        return !isExpired && storedOtpData.otp === otp;
    }
};
exports.OtpService = OtpService;
exports.OtpService = OtpService = __decorate([
    (0, common_1.Injectable)()
], OtpService);
//# sourceMappingURL=otp.service.js.map