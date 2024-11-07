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
exports.LikesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("./models");
let LikesService = class LikesService {
    constructor(likesModel) {
        this.likesModel = likesModel;
    }
    async getAllLikes() {
        return await this.likesModel.findAll();
    }
    async getSingleLike(id) {
        return await this.likesModel.findOne({ where: { id } });
    }
    async createLike(payload) {
        const new_like = await this.likesModel.create({
            user_id: payload.user_id,
            movie_id: payload.movie_id
        });
        return { message: 'Like created successfully', new_like };
    }
    async updateLike(id, payload) {
        await this.likesModel.update(payload, { where: { id } });
        const updatedLike = await this.likesModel.findOne({ where: { id } });
        return { message: 'Like updated successfully', updatedLike };
    }
    async deleteLike(id) {
        const like = await this.likesModel.findByPk(id);
        await like.destroy();
        return { message: 'Like deleted successfully' };
    }
};
exports.LikesService = LikesService;
exports.LikesService = LikesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(models_1.Likes)),
    __metadata("design:paramtypes", [Object])
], LikesService);
//# sourceMappingURL=like.service.js.map