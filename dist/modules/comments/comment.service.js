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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("./models");
let CommentsService = class CommentsService {
    constructor(commentsModel) {
        this.commentsModel = commentsModel;
    }
    async getAllComments() {
        return await this.commentsModel.findAll();
    }
    async getSingleComment(id) {
        return await this.commentsModel.findOne({ where: { id } });
    }
    async createComment(payload) {
        const new_comment = await this.commentsModel.create({
            text: payload.text,
            user_id: payload.user_id,
            movie_id: payload.movie_id
        });
        return { message: 'Comment created successfully', new_comment };
    }
    async updateComment(id, payload) {
        await this.commentsModel.update(payload, { where: { id } });
        const updatedComment = await this.commentsModel.findOne({ where: { id } });
        return { message: 'Comment updated successfully', updatedComment };
    }
    async deleteComment(id) {
        const comment = await this.commentsModel.findByPk(id);
        await comment.destroy();
        return { message: 'Comment deleted successfully' };
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(models_1.Comments)),
    __metadata("design:paramtypes", [Object])
], CommentsService);
//# sourceMappingURL=comment.service.js.map