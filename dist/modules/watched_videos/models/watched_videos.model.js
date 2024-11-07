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
exports.WatchedVideos = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_1 = require("../../user");
const movies_1 = require("../../movies");
let WatchedVideos = class WatchedVideos extends sequelize_typescript_1.Model {
};
exports.WatchedVideos = WatchedVideos;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], WatchedVideos.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => movies_1.Movie),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BIGINT,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], WatchedVideos.prototype, "movie_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_1.User),
    __metadata("design:type", user_1.User)
], WatchedVideos.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => movies_1.Movie),
    __metadata("design:type", movies_1.Movie)
], WatchedVideos.prototype, "movie", void 0);
exports.WatchedVideos = WatchedVideos = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true, tableName: 'watched_videos' })
], WatchedVideos);
//# sourceMappingURL=watched_videos.model.js.map