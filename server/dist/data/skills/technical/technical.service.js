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
exports.TechnicalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const skills_technical_schema_1 = require("../../schemas/skills.technical.schema");
const cloudinary_service_1 = require("../../../libs/cloudinary/cloudinary.service");
let TechnicalService = class TechnicalService {
    skill;
    cloudinary;
    constructor(skill, cloudinary) {
        this.skill = skill;
        this.cloudinary = cloudinary;
    }
    async createSkill(skill, image) {
        try {
            const { name, percentage, type } = skill;
            const img = await this.cloudinary.uploadImage(image);
            if (img instanceof Error) {
                throw new common_1.InternalServerErrorException('Error uploading image to Cloudinary');
            }
            const upload = new this.skill({
                image: { public_id: img.public_id, url: img.url },
                type,
                name,
                percentage,
            });
            return await upload.save();
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            throw new common_1.InternalServerErrorException('Error interno del servidor al crear la habilidad técnica: ' + errorMessage);
        }
    }
    async getAllSkills() {
        try {
            return await this.skill.find();
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            throw new common_1.InternalServerErrorException('Error interno del servidor al obtener las habilidades técnicas: ' + errorMessage);
        }
    }
};
exports.TechnicalService = TechnicalService;
exports.TechnicalService = TechnicalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(skills_technical_schema_1.TechnicalSkill.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        cloudinary_service_1.CloudinaryService])
], TechnicalService);
//# sourceMappingURL=technical.service.js.map