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
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movie_service_1 = require("./movie.service");
const dtos_1 = require("./dtos");
const platform_express_1 = require("@nestjs/platform-express");
let MovieController = class MovieController {
    constructor(movieService) {
        this.movieService = movieService;
    }
    async getAllMovies(page, limit, sort, filters) {
        return this.movieService.getAllMovies({
            page: Number(page) || 1,
            limit: Number(limit) || 10,
            sort,
            filters
        });
    }
    async getTrendingMovies() {
        return this.movieService.getTrendingMovies();
    }
    async getLatestMovies() {
        return this.movieService.getLatestMovies();
    }
    async getMostReviewedMovies() {
        return this.movieService.getMostReviewedMovies();
    }
    async searchMovies(searchTerm) {
        return this.movieService.searchMovies(searchTerm);
    }
    async getSingleMovie(id) {
        return this.movieService.getSingleMovie(id);
    }
    async createMovie(payload, files) {
        return this.movieService.createMovie(payload, files.image[0], files.video[0]);
    }
    async updateMovie(id, payload) {
        return this.movieService.updateMovie(id, payload);
    }
    async deleteMovie(id) {
        return this.movieService.deleteMovie(id);
    }
};
exports.MovieController = MovieController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('sort')),
    __param(3, (0, common_1.Query)('filters')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getAllMovies", null);
__decorate([
    (0, common_1.Get)('trending'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getTrendingMovies", null);
__decorate([
    (0, common_1.Get)('latest'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getLatestMovies", null);
__decorate([
    (0, common_1.Get)('most-reviewed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getMostReviewedMovies", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "searchMovies", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "getSingleMovie", null);
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: "image", maxCount: 1 }, { name: "video", maxCount: 1 }])),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateMovieDto, Object]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "createMovie", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dtos_1.UpdateMovieDto]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "updateMovie", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "deleteMovie", null);
exports.MovieController = MovieController = __decorate([
    (0, common_1.Controller)('movies'),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
//# sourceMappingURL=movie.controller.js.map