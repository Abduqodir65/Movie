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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _GenreController__service;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreController = void 0;
const common_1 = require("@nestjs/common");
const genre_service_1 = require("./genre.service");
const dtos_1 = require("./dtos");
let GenreController = class GenreController {
    constructor(service) {
        _GenreController__service.set(this, void 0);
        __classPrivateFieldSet(this, _GenreController__service, service, "f");
    }
    async getAllGenres() {
        return await __classPrivateFieldGet(this, _GenreController__service, "f").getAllGenres();
    }
    async getSingleGenre(id) {
        return await __classPrivateFieldGet(this, _GenreController__service, "f").getSingleGenre(+id);
    }
    async createGenre(createGenrePayload) {
        await __classPrivateFieldGet(this, _GenreController__service, "f").createGenre(createGenrePayload);
        return {
            message: 'Genre created successfully', new_genre: createGenrePayload
        };
    }
    async updateGenre(id, updateGenrePayload) {
        await __classPrivateFieldGet(this, _GenreController__service, "f").updateGenre(+id, updateGenrePayload);
        return {
            message: 'User updated successfully',
            updatedGenre: updateGenrePayload
        };
    }
    async deleteGenre(id) {
        await __classPrivateFieldGet(this, _GenreController__service, "f").deleteGenre(+id);
        return {
            message: 'Genre deleted successfully'
        };
    }
};
exports.GenreController = GenreController;
_GenreController__service = new WeakMap();
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "getAllGenres", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "getSingleGenre", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateGenreDto]),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "createGenre", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dtos_1.UpdateGenreDto]),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "updateGenre", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "deleteGenre", null);
exports.GenreController = GenreController = __decorate([
    (0, common_1.Controller)('genres'),
    __metadata("design:paramtypes", [genre_service_1.GenreService])
], GenreController);
//# sourceMappingURL=genre.controller.js.map