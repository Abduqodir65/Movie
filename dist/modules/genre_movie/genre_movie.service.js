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
exports.GenreMovieService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("./models");
let GenreMovieService = class GenreMovieService {
    constructor(genreMovieModel) {
        this.genreMovieModel = genreMovieModel;
    }
    async getAllGenreMovies() {
        return await this.genreMovieModel.findAll();
    }
    async getSingleGenreMovie(id) {
        return await this.genreMovieModel.findOne({ where: { id } });
    }
    async createGenreMovie(payload) {
        const new_genreMovie = await this.genreMovieModel.create({
            movie_id: payload.movie_id,
            genre_id: payload.genre_id
        });
        return { message: 'GenreMovie created successfully', new_genreMovie };
    }
    async updateGenreMovie(id, payload) {
        await this.genreMovieModel.update(payload, { where: { id } });
        const updatedGenreMovie = await this.genreMovieModel.findOne({ where: { id } });
        return { message: 'GenreMovie updated successfully', updatedGenreMovie };
    }
    async deleteGenreMovie(id) {
        const genreMovie = await this.genreMovieModel.findByPk(id);
        await genreMovie.destroy();
        return { message: 'GenreMovie deleted successfully' };
    }
};
exports.GenreMovieService = GenreMovieService;
exports.GenreMovieService = GenreMovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(models_1.GenreMovie)),
    __metadata("design:paramtypes", [Object])
], GenreMovieService);
//# sourceMappingURL=genre_movie.service.js.map