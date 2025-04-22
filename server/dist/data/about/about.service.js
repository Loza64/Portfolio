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
exports.AboutService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const about_schema_1 = require("../schemas/about.schema");
const mongoose_2 = require("mongoose");
let AboutService = class AboutService {
    about;
    constructor(about) {
        this.about = about;
    }
    async create(body) {
        try {
            const upload = new this.about(body);
            return await upload.save();
        }
        catch (error) {
            if (error instanceof Error && error.name === 'ValidationError') {
                throw new common_1.InternalServerErrorException('Error de validación al guardar los datos');
            }
            throw new common_1.InternalServerErrorException('Error interno del servidor al crear el recurso');
        }
    }
    async getList() {
        try {
            return await this.about.find();
        }
        catch (error) {
            if (error instanceof Error && error.name === 'ValidationError') {
                throw new common_1.InternalServerErrorException('Error de validación al guardar los datos');
            }
            throw new common_1.InternalServerErrorException('Error interno del servidor al obtener la lista');
        }
    }
};
exports.AboutService = AboutService;
exports.AboutService = AboutService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(about_schema_1.About.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AboutService);
//# sourceMappingURL=about.service.js.map