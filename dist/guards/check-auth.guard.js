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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const _decorators_1 = require("../decorators");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const modules_1 = require("../modules");
let CheckAuthGuard = class CheckAuthGuard {
    constructor(reflector, jwtService, config) {
        this.reflector = reflector;
        this.jwtService = jwtService;
        this.config = config;
    }
    canActivate(context) {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest();
        const isProtected = this.reflector.get(_decorators_1.Protected, context.getHandler());
        if (!isProtected) {
            request.role = modules_1.UserRoles.user;
            return true;
        }
        const bearerToken = request.headers['authorization'];
        if (!(bearerToken &&
            bearerToken.startsWith('Bearer') &&
            bearerToken.split('Bearer ')[1]?.length)) {
            throw new common_1.BadRequestException('Please provide valid bearer token');
        }
        const token = bearerToken.split('Bearer ')[1];
        try {
            this.jwtService.verify(token, { secret: this.config.get('jwt.accessKey') });
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
            return false;
        }
        const userDecodedData = this.jwtService.decode(token);
        request.userId = userDecodedData?.id;
        request.role = userDecodedData?.role;
        return true;
    }
};
exports.CheckAuthGuard = CheckAuthGuard;
exports.CheckAuthGuard = CheckAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector, jwt_1.JwtService, config_1.ConfigService])
], CheckAuthGuard);
//# sourceMappingURL=check-auth.guard.js.map