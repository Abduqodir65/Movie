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
exports.ActorService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const actor_model_1 = require("./models/actor.model");
const file_service_1 = require("../file/file.service");
let ActorService = class ActorService {
    constructor(actorModel, fileService) {
        this.actorModel = actorModel;
        this.fileService = fileService;
    }
    async getAllActors() {
        return await this.actorModel.findAll();
    }
    async getSingleActor(id) {
        return await this.actorModel.findOne({ where: { id } });
    }
    async createActor(payload, imageFile) {
        const imageUrl = await this.fileService.uploadFile(imageFile);
        const new_actor = await this.actorModel.create({
            name: payload.name,
            image: imageUrl,
            movie_id: payload.movie_id,
        });
        return {
            message: 'Actor created successfully',
            new_actor,
        };
    }
    async updateActor(id, payload) {
        await this.actorModel.update(payload, { where: { id } });
        const updatedActor = await this.actorModel.findOne({ where: { id } });
        return {
            message: 'Actor updated successfully',
            updatedActor,
        };
    }
    async deleteActor(id) {
        const actor = await this.actorModel.findByPk(id);
        if (actor) {
            await this.fileService.deleteFile(actor.image);
            await actor.destroy();
        }
        return {
            message: 'Actor deleted successfully',
        };
    }
};
exports.ActorService = ActorService;
exports.ActorService = ActorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(actor_model_1.Actor)),
    __metadata("design:paramtypes", [Object, file_service_1.FileService])
], ActorService);
//# sourceMappingURL=actor.service.js.map