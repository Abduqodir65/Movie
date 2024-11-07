"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchedVideosModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("./models");
const watched_videos_service_1 = require("./watched_videos.service");
const watched_videos_controller_1 = require("./watched_videos.controller");
let WatchedVideosModule = class WatchedVideosModule {
};
exports.WatchedVideosModule = WatchedVideosModule;
exports.WatchedVideosModule = WatchedVideosModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([models_1.WatchedVideos])],
        providers: [watched_videos_service_1.WatchedVideosService],
        controllers: [watched_videos_controller_1.WatchedVideosController]
    })
], WatchedVideosModule);
//# sourceMappingURL=watched_videos.module.js.map