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
exports.ActorController = void 0;
const common_1 = require("@nestjs/common");
const actor_service_1 = require("./actor.service");
const platform_express_1 = require("@nestjs/platform-express");
const dtos_1 = require("./dtos");
let ActorController = class ActorController {
    constructor(actorService) {
        this.actorService = actorService;
    }
    async getAllActors() {
        return await this.actorService.getAllActors();
    }
    async getSingleActor(id) {
        return await this.actorService.getSingleActor(+id);
    }
    async createActor(createActorPayload, image) {
        const result = await this.actorService.createActor(createActorPayload, image);
        return {
            message: 'Actor created successfully',
            new_actor: result.new_actor,
        };
    }
    async updateActor(id, updateActorPayload) {
        const result = await this.actorService.updateActor(+id, updateActorPayload);
        return {
            message: 'Actor updated successfully',
            updatedActor: result.updatedActor,
        };
    }
    async deleteActor(id) {
        return await this.actorService.deleteActor(+id);
    }
};
exports.ActorController = ActorController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ActorController.prototype, "getAllActors", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActorController.prototype, "getSingleActor", null);
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateActorDto, Object]),
    __metadata("design:returntype", Promise)
], ActorController.prototype, "createActor", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.UpdateActorDto]),
    __metadata("design:returntype", Promise)
], ActorController.prototype, "updateActor", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ActorController.prototype, "deleteActor", null);
exports.ActorController = ActorController = __decorate([
    (0, common_1.Controller)('actors'),
    __metadata("design:paramtypes", [actor_service_1.ActorService])
], ActorController);
//# sourceMappingURL=actor.controller.js.map