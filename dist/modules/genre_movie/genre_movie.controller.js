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
exports.GenreMovieController = void 0;
const common_1 = require("@nestjs/common");
const genre_movie_service_1 = require("./genre_movie.service");
let GenreMovieController = class GenreMovieController {
    constructor(genreMovieService) {
        this.genreMovieService = genreMovieService;
    }
    async getAllGenreMovies() {
        return await this.genreMovieService.getAllGenreMovies();
    }
    async getSingleGenreMovie(id) {
        return await this.genreMovieService.getSingleGenreMovie(+id);
    }
    async createGenreMovie(payload) {
        return await this.genreMovieService.createGenreMovie(payload);
    }
    async updateGenreMovie(id, payload) {
        return await this.genreMovieService.updateGenreMovie(+id, payload);
    }
    async deleteGenreMovie(id) {
        return await this.genreMovieService.deleteGenreMovie(+id);
    }
};
exports.GenreMovieController = GenreMovieController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GenreMovieController.prototype, "getAllGenreMovies", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenreMovieController.prototype, "getSingleGenreMovie", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GenreMovieController.prototype, "createGenreMovie", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], GenreMovieController.prototype, "updateGenreMovie", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenreMovieController.prototype, "deleteGenreMovie", null);
exports.GenreMovieController = GenreMovieController = __decorate([
    (0, common_1.Controller)('genre-movies'),
    __metadata("design:paramtypes", [genre_movie_service_1.GenreMovieService])
], GenreMovieController);
//# sourceMappingURL=genre_movie.controller.js.map