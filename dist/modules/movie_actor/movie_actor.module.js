"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieActorModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("./models");
const movie_actor_service_1 = require("./movie_actor.service");
const movie_actor_controller_1 = require("./movie_actor.controller");
let MovieActorModule = class MovieActorModule {
};
exports.MovieActorModule = MovieActorModule;
exports.MovieActorModule = MovieActorModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([models_1.MovieActor])],
        providers: [movie_actor_service_1.MovieActorService],
        controllers: [movie_actor_controller_1.MovieActorController]
    })
], MovieActorModule);
//# sourceMappingURL=movie_actor.module.js.map