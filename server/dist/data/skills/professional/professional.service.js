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
exports.ProfessionalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const skill_professional_schema_1 = require("../../schemas/skill.professional.schema");
let ProfessionalService = class ProfessionalService {
    professionalSkill;
    constructor(professionalSkill) {
        this.professionalSkill = professionalSkill;
    }
    async createSkill(skill) {
        try {
            const newSkill = new this.professionalSkill(skill);
            return await newSkill.save();
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            throw new common_1.InternalServerErrorException('Error interno del servidor al crear la habilidad: ' + errorMessage);
        }
    }
    async getAllSkills() {
        try {
            return await this.professionalSkill.find();
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            throw new common_1.InternalServerErrorException('Error interno del servidor al obtener las habilidades: ' + errorMessage);
        }
    }
};
exports.ProfessionalService = ProfessionalService;
exports.ProfessionalService = ProfessionalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(skill_professional_schema_1.ProfessionalSkill.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProfessionalService);
//# sourceMappingURL=professional.service.js.map