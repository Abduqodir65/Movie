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
exports.MovieActorController = void 0;
const common_1 = require("@nestjs/common");
const movie_actor_service_1 = require("./movie_actor.service");
let MovieActorController = class MovieActorController {
    constructor(movieActorService) {
        this.movieActorService = movieActorService;
    }
    async getAllMovieActors() {
        return await this.movieActorService.getAllMovieActors();
    }
    async getSingleMovieActor(id) {
        return await this.movieActorService.getSingleMovieActor(+id);
    }
    async createMovieActor(payload) {
        return await this.movieActorService.createMovieActor(payload);
    }
    async updateMovieActor(id, payload) {
        return await this.movieActorService.updateMovieActor(+id, payload);
    }
    async deleteMovieActor(id) {
        return await this.movieActorService.deleteMovieActor(+id);
    }
};
exports.MovieActorController = MovieActorController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MovieActorController.prototype, "getAllMovieActors", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieActorController.prototype, "getSingleMovieActor", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MovieActorController.prototype, "createMovieActor", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MovieActorController.prototype, "updateMovieActor", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieActorController.prototype, "deleteMovieActor", null);
exports.MovieActorController = MovieActorController = __decorate([
    (0, common_1.Controller)('movie-actors'),
    __metadata("design:paramtypes", [movie_actor_service_1.MovieActorService])
], MovieActorController);
//# sourceMappingURL=movie_actor.controller.js.map