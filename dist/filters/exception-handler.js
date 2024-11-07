"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionHandlerFilter = void 0;
const common_1 = require("@nestjs/common");
let ExceptionHandlerFilter = class ExceptionHandlerFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const requestTime = new Date().toISOString();
        if (exception instanceof common_1.HttpException) {
            return response.status(exception.getStatus()).json({
                message: exception.message,
                requestTime,
                url: request.url,
                errorName: exception.name,
                statusCode: exception.getStatus(),
            });
        }
        return response.status(500).json({
            message: exception?.message || 'Internal server error',
            requestTime,
            url: request.url,
            errorName: exception?.name,
            statusCode: 500,
        });
    }
};
exports.ExceptionHandlerFilter = ExceptionHandlerFilter;
exports.ExceptionHandlerFilter = ExceptionHandlerFilter = __decorate([
    (0, common_1.Catch)()
], ExceptionHandlerFilter);
//# sourceMappingURL=exception-handler.js.map