"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const uuid_1 = require("uuid");
let FileService = class FileService {
    async uploadFile(file) {
        try {
            const ext = (0, path_1.extname)(file.originalname);
            const file_name = file.originalname + '_' + (0, uuid_1.v4)() + ext.toLowerCase();
            const file_path = (0, path_1.resolve)(__dirname, '..', '..', '..', 'uploads');
            if (!(0, fs_1.existsSync)(file_path)) {
                (0, fs_1.mkdirSync)(file_path, { recursive: true });
            }
            (0, fs_1.writeFileSync)((0, path_1.join)(file_path, file_name), file.buffer);
            return file_name;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error on uploading file: ${error}`);
        }
    }
    async deleteFile(file_name) {
        try {
            const file_path = (0, path_1.resolve)(__dirname, '..', '..', '..', 'uploads', file_name);
            if (!(0, fs_1.existsSync)(file_path)) {
                throw new common_1.NotFoundException('File not found');
            }
            (0, fs_1.unlinkSync)(file_path);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error on deleting file: ${error}`);
        }
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)()
], FileService);
//# sourceMappingURL=file.service.js.map