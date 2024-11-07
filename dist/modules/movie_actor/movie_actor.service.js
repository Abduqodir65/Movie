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
exports.MovieActorService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const models_1 = require("./models");
let MovieActorService = class MovieActorService {
    constructor(movieActorModel) {
        this.movieActorModel = movieActorModel;
    }
    async getAllMovieActors() {
        return await this.movieActorModel.findAll();
    }
    async getSingleMovieActor(id) {
        return await this.movieActorModel.findOne({ where: { id } });
    }
    async createMovieActor(payload) {
        const new_movieActor = await this.movieActorModel.create({
            movie_id: payload.movie_id,
            actor_id: payload.actor_id
        });
        return { message: 'MovieActor created successfully', new_movieActor };
    }
    async updateMovieActor(id, payload) {
        await this.movieActorModel.update(payload, { where: { id } });
        const updatedMovieActor = await this.movieActorModel.findOne({ where: { id } });
        return { message: 'MovieActor updated successfully', updatedMovieActor };
    }
    async deleteMovieActor(id) {
        const movieActor = await this.movieActorModel.findByPk(id);
        await movieActor.destroy();
        return { message: 'MovieActor deleted successfully' };
    }
};
exports.MovieActorService = MovieActorService;
exports.MovieActorService = MovieActorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(models_1.MovieActor)),
    __metadata("design:paramtypes", [Object])
], MovieActorService);
//# sourceMappingURL=movie_actor.service.js.map