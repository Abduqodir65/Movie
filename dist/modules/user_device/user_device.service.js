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
exports.UserDeviceService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("./models");
let UserDeviceService = class UserDeviceService {
    constructor(userDeviceModel) {
        this.userDeviceModel = userDeviceModel;
    }
    async getAllUserDevices() {
        return await this.userDeviceModel.findAll();
    }
    async getSingleUserDevice(id) {
        return await this.userDeviceModel.findOne({ where: { id } });
    }
    async createUserDevice(payload) {
        const new_userDevice = await this.userDeviceModel.create({
            userId: payload.userId,
            loginTime: payload.loginTime,
            device: payload.device,
        });
        return { message: 'User device created successfully', new_userDevice };
    }
    async updateUserDevice(id, payload) {
        await this.userDeviceModel.update(payload, { where: { id } });
        const updatedUserDevice = await this.userDeviceModel.findOne({ where: { id } });
        return { message: 'User device updated successfully', updatedUserDevice };
    }
    async deleteUserDevice(id) {
        const userDevice = await this.userDeviceModel.findByPk(id);
        await userDevice.destroy();
        return { message: 'User device deleted successfully' };
    }
};
exports.UserDeviceService = UserDeviceService;
exports.UserDeviceService = UserDeviceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(models_1.UserDevice)),
    __metadata("design:paramtypes", [Object])
], UserDeviceService);
//# sourceMappingURL=user_device.service.js.map