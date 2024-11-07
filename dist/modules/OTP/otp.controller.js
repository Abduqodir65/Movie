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
exports.OtpController = void 0;
const common_1 = require("@nestjs/common");
const otp_service_1 = require("./otp.service");
const dtos_1 = require("./dtos");
const swagger_1 = require("@nestjs/swagger");
let OtpController = class OtpController {
    constructor(otpService) {
        this.otpService = otpService;
    }
    generateOtp(otpCreateDto) {
        const otpData = this.otpService.generateOtpWithExpiry(10);
        this.otpService.storeOtp(otpCreateDto.email, otpData);
        return { message: 'OTP created and sent', otp: otpData.otp };
    }
    validateOtp(otpValidateDto) {
        const isValid = this.otpService.validateOtp(otpValidateDto.email, otpValidateDto.otp);
        if (!isValid) {
            return { message: 'Invalid or expired OTP' };
        }
        return { message: 'OTP is valid' };
    }
};
exports.OtpController = OtpController;
__decorate([
    (0, common_1.Post)('generate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.OtpCreateDto]),
    __metadata("design:returntype", void 0)
], OtpController.prototype, "generateOtp", null);
__decorate([
    (0, common_1.Post)('validate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.OtpValidateDto]),
    __metadata("design:returntype", void 0)
], OtpController.prototype, "validateOtp", null);
exports.OtpController = OtpController = __decorate([
    (0, swagger_1.ApiTags)('OTP'),
    (0, common_1.Controller)('otp'),
    __metadata("design:paramtypes", [otp_service_1.OtpService])
], OtpController);
//# sourceMappingURL=otp.controller.js.map