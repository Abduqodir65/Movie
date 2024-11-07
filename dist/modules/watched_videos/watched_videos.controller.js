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
exports.WatchedVideosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const watched_videos_service_1 = require("./watched_videos.service");
const dtos_1 = require("./dtos");
let WatchedVideosController = class WatchedVideosController {
    constructor(watchedVideosService) {
        this.watchedVideosService = watchedVideosService;
    }
    async getAllWatchedVideos() {
        return await this.watchedVideosService.getAllWatchedVideos();
    }
    async getSingleWatchedVideo(id) {
        return await this.watchedVideosService.getSingleWatchedVideo(+id);
    }
    async createWatchedVideo(createWatchedVideoPayload) {
        return await this.watchedVideosService.createWatchedVideo(createWatchedVideoPayload);
    }
    async updateWatchedVideo(id, updateWatchedVideoPayload) {
        return await this.watchedVideosService.updateWatchedVideo(+id, updateWatchedVideoPayload);
    }
    async deleteWatchedVideo(id) {
        return await this.watchedVideosService.deleteWatchedVideo(+id);
    }
};
exports.WatchedVideosController = WatchedVideosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WatchedVideosController.prototype, "getAllWatchedVideos", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WatchedVideosController.prototype, "getSingleWatchedVideo", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateWatchedVideoDto]),
    __metadata("design:returntype", Promise)
], WatchedVideosController.prototype, "createWatchedVideo", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.UpdateWatchedVideoDto]),
    __metadata("design:returntype", Promise)
], WatchedVideosController.prototype, "updateWatchedVideo", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WatchedVideosController.prototype, "deleteWatchedVideo", null);
exports.WatchedVideosController = WatchedVideosController = __decorate([
    (0, swagger_1.ApiTags)('Watched Videos'),
    (0, common_1.Controller)('watched-videos'),
    __metadata("design:paramtypes", [watched_videos_service_1.WatchedVideosService])
], WatchedVideosController);
//# sourceMappingURL=watched_videos.controller.js.map