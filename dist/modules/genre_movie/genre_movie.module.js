"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreMovieModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("./models");
const genre_movie_service_1 = require("./genre_movie.service");
const genre_movie_controller_1 = require("./genre_movie.controller");
let GenreMovieModule = class GenreMovieModule {
};
exports.GenreMovieModule = GenreMovieModule;
exports.GenreMovieModule = GenreMovieModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([models_1.GenreMovie])],
        providers: [genre_movie_service_1.GenreMovieService],
        controllers: [genre_movie_controller_1.GenreMovieController]
    })
], GenreMovieModule);
//# sourceMappingURL=genre_movie.module.js.map