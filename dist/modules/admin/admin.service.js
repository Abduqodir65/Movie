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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("./models");
let AdminService = class AdminService {
    constructor(adminModel) {
        this.adminModel = adminModel;
    }
    async getAllAdmins() {
        return await this.adminModel.findAll();
    }
    async getSingleAdmin(id) {
        return await this.adminModel.findOne({ where: { id } });
    }
    async createAdmin(payload) {
        const new_admin = await this.adminModel.create({ name: payload.name });
        return { message: 'Admin created successfully', new_admin };
    }
    async updateAdmin(id, payload) {
        await this.adminModel.update(payload, { where: { id } });
        const updatedAdmin = await this.adminModel.findOne({ where: { id } });
        return { message: 'Admin updated successfully', updatedAdmin };
    }
    async deleteAdmin(id) {
        const admin = await this.adminModel.findByPk(id);
        await admin.destroy();
        return { message: 'Admin deleted successfully' };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(models_1.Admin)),
    __metadata("design:paramtypes", [Object])
], AdminService);
//# sourceMappingURL=admin.service.js.map