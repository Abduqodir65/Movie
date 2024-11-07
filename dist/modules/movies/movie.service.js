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
exports.MovieService = void 0;
const common_1 = require("@nestjs/common");
const models_1 = require("./models");
const sequelize_1 = require("@nestjs/sequelize");
const file_1 = require("../file");
const utils_1 = require("../../utils");
const sequelize_typescript_1 = require("sequelize-typescript");
let MovieService = class MovieService {
    constructor(movieModel, fileService, sequelize) {
        this.movieModel = movieModel;
        this.fileService = fileService;
        this.sequelize = sequelize;
    }
    async getAllMovies(filters) {
        const apiFeature = new utils_1.ApiFeature('movies')
            .paginate(filters.page, filters.limit)
            .sort(filters.sort)
            .filter(filters);
        const query = apiFeature.getQuery();
        const movies = await this.sequelize.query(query.queryString, {
            model: models_1.Movie,
            mapToModel: true,
            replacements: query.filters,
        });
        console.log(movies);
        return movies;
    }
    async getTrendingMovies() {
        const apiFeature = new utils_1.ApiFeature('movies').trending();
        const query = apiFeature.getQuery();
        const movies = await this.sequelize.query(query.queryString, {
            model: models_1.Movie,
            mapToModel: true,
        });
        return movies;
    }
    async getLatestMovies() {
        const apiFeature = new utils_1.ApiFeature('movies').latest();
        const query = apiFeature.getQuery();
        const movies = await this.sequelize.query(query.queryString, {
            model: models_1.Movie,
            mapToModel: true,
        });
        return movies;
    }
    async getMostReviewedMovies() {
        const apiFeature = new utils_1.ApiFeature('movies').mostReviewed();
        const query = apiFeature.getQuery();
        const movies = await this.sequelize.query(query.queryString, {
            model: models_1.Movie,
            mapToModel: true,
        });
        return movies;
    }
    async searchMovies(searchTerm) {
        const apiFeature = new utils_1.ApiFeature('movies').smartSearch(searchTerm);
        const query = apiFeature.getQuery();
        const movies = await this.sequelize.query(query.queryString, {
            model: models_1.Movie,
            mapToModel: true,
        });
        return movies;
    }
    async getSingleMovie(id) {
        return await this.movieModel.findOne({
            where: { id }
        });
    }
    async createMovie(payload, imageFile, videoFile) {
        const image = await this.fileService.uploadFile(imageFile);
        const video = await this.fileService.uploadFile(videoFile);
        const new_movie = await this.movieModel.create({
            title: payload.title,
            description: payload.description,
            director: payload.director,
            rating: payload.rating,
            language: payload.language,
            duration: payload.duration,
            year: payload.year,
            image,
            video,
            user_id: payload.user_id,
        });
        return {
            message: 'Movie created successfully',
            new_movie,
        };
    }
    async updateMovie(id, payload) {
        await this.movieModel.update(payload, {
            where: { id },
        });
        const updatedMovie = await this.movieModel.findOne({ where: { id } });
        return {
            message: 'Movie updated successfully',
            updatedMovie,
        };
    }
    async deleteMovie(id) {
        const foundedMovie = await this.movieModel.findByPk(id);
        await this.fileService.deleteFile(foundedMovie.image);
        await this.fileService.deleteFile(foundedMovie.video);
        foundedMovie.destroy();
        return {
            message: "User deleted successfully",
        };
    }
};
exports.MovieService = MovieService;
exports.MovieService = MovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(models_1.Movie)),
    __metadata("design:paramtypes", [Object, file_1.FileService,
        sequelize_typescript_1.Sequelize])
], MovieService);
//# sourceMappingURL=movie.service.js.map