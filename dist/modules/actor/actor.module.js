"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const actor_model_1 = require("./models/actor.model");
const actor_service_1 = require("./actor.service");
const actor_controller_1 = require("./actor.controller");
const file_1 = require("../file");
let ActorModule = class ActorModule {
};
exports.ActorModule = ActorModule;
exports.ActorModule = ActorModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([actor_model_1.Actor]), file_1.FileModule],
        providers: [actor_service_1.ActorService],
        controllers: [actor_controller_1.ActorController],
    })
], ActorModule);
//# sourceMappingURL=actor.module.js.map