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
exports.UserDeviceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_device_service_1 = require("./user_device.service");
const dtos_1 = require("./dtos");
let UserDeviceController = class UserDeviceController {
    constructor(userDeviceService) {
        this.userDeviceService = userDeviceService;
    }
    async getAllUserDevices() {
        return await this.userDeviceService.getAllUserDevices();
    }
    async getSingleUserDevice(id) {
        return await this.userDeviceService.getSingleUserDevice(+id);
    }
    async createUserDevice(createUserDevicePayload) {
        return await this.userDeviceService.createUserDevice(createUserDevicePayload);
    }
    async updateUserDevice(id, updateUserDevicePayload) {
        return await this.userDeviceService.updateUserDevice(+id, updateUserDevicePayload);
    }
    async deleteUserDevice(id) {
        return await this.userDeviceService.deleteUserDevice(+id);
    }
};
exports.UserDeviceController = UserDeviceController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserDeviceController.prototype, "getAllUserDevices", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserDeviceController.prototype, "getSingleUserDevice", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateUserDeviceDto]),
    __metadata("design:returntype", Promise)
], UserDeviceController.prototype, "createUserDevice", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.UpdateUserDeviceDto]),
    __metadata("design:returntype", Promise)
], UserDeviceController.prototype, "updateUserDevice", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserDeviceController.prototype, "deleteUserDevice", null);
exports.UserDeviceController = UserDeviceController = __decorate([
    (0, swagger_1.ApiTags)('User Devices'),
    (0, common_1.Controller)('user-devices'),
    __metadata("design:paramtypes", [user_device_service_1.UserDeviceService])
], UserDeviceController);
//# sourceMappingURL=user_device.controller.js.map