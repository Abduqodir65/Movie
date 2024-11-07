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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("./models");
const file_1 = require("../file");
let UserService = class UserService {
    constructor(userModel, fileService) {
        this.userModel = userModel;
        this.fileService = fileService;
    }
    async getAllUsers() {
        return await this.userModel.findAll();
    }
    async getSingleUser(id) {
        return await this.userModel.findOne({
            where: { id }
        });
    }
    async createUser(payload, file) {
        const image = await this.fileService.uploadFile(file);
        const new_user = await this.userModel.create({
            username: payload.username,
            email: payload.email,
            password: payload.password,
            is_premium: payload.is_premium,
            role: payload?.role ? payload.role : models_1.UserRoles.user,
            image
        });
        return { message: 'User created successfully', new_user };
    }
    async updateUser(id, payload) {
        await this.userModel.update(payload, {
            where: { id }
        });
        const updatedUser = await this.userModel.findOne({ where: { id } });
        return { message: 'User updated successfully', updatedUser };
    }
    async deleteUser(id) {
        const foundedUser = await this.userModel.findByPk(id);
        await this.fileService.deleteFile(foundedUser.image);
        foundedUser.destroy();
        return {
            message: 'User deleted successfully'
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(models_1.User)),
    __metadata("design:paramtypes", [Object, file_1.FileService])
], UserService);
//# sourceMappingURL=user.service.js.map