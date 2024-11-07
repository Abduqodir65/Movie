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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieActor = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const movies_1 = require("../../movies");
const models_1 = require("../../actor/models");
let MovieActor = class MovieActor extends sequelize_typescript_1.Model {
};
exports.MovieActor = MovieActor;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => movies_1.Movie),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    }),
    __metadata("design:type", Number)
], MovieActor.prototype, "movie_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => models_1.Actor),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    }),
    __metadata("design:type", Number)
], MovieActor.prototype, "actor_id", void 0);
exports.MovieActor = MovieActor = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: false, tableName: 'movie_actor' })
], MovieActor);
//# sourceMappingURL=movie_actor.model.js.map