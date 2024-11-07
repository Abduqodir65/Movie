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
exports.WatchedVideosService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("./models");
let WatchedVideosService = class WatchedVideosService {
    constructor(watchedVideosModel) {
        this.watchedVideosModel = watchedVideosModel;
    }
    async getAllWatchedVideos() {
        return await this.watchedVideosModel.findAll();
    }
    async getSingleWatchedVideo(id) {
        return await this.watchedVideosModel.findOne({ where: { id } });
    }
    async createWatchedVideo(payload) {
        const new_watchedVideo = await this.watchedVideosModel.create({
            user_id: payload.user_id,
            movie_id: payload.movie_id
        });
        return { message: 'Watched video created successfully', new_watchedVideo };
    }
    async updateWatchedVideo(id, payload) {
        await this.watchedVideosModel.update(payload, { where: { id } });
        const updatedWatchedVideo = await this.watchedVideosModel.findOne({ where: { id } });
        return { message: 'Watched video updated successfully', updatedWatchedVideo };
    }
    async deleteWatchedVideo(id) {
        const watchedVideo = await this.watchedVideosModel.findByPk(id);
        await watchedVideo.destroy();
        return { message: 'Watched video deleted successfully' };
    }
};
exports.WatchedVideosService = WatchedVideosService;
exports.WatchedVideosService = WatchedVideosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(models_1.WatchedVideos)),
    __metadata("design:paramtypes", [Object])
], WatchedVideosService);
//# sourceMappingURL=watched_videos.service.js.map