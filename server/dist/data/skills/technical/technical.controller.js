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
exports.TechnicalController = void 0;
const common_1 = require("@nestjs/common");
const technical_service_1 = require("./technical.service");
const technical_skill_dto_1 = require("../../../dto/technical.skill.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let TechnicalController = class TechnicalController {
    service;
    constructor(service) {
        this.service = service;
    }
    responseMessage(res, status, message, result) {
        return res.status(status).json({
            state: status >= 200 && status < 300,
            message,
            ...(result ? { result } : undefined)
        });
    }
    async upload(body, image, res) {
        try {
            const skill = await this.service.createSkill(body, image);
            return this.responseMessage(res, 201, "Skill created successfully", skill);
        }
        catch (error) {
            return this.responseMessage(res, 500, "Error creating skill", error);
        }
    }
    async get(res) {
        try {
            const skills = await this.service.getAllSkills();
            if (skills.length === 0)
                return this.responseMessage(res, 404, "No skills found", null);
            return this.responseMessage(res, 200, "Skills found", skills);
        }
        catch (error) {
            return this.responseMessage(res, 500, "Error getting skills", error);
        }
    }
};
exports.TechnicalController = TechnicalController;
__decorate([
    (0, common_1.Post)("upload"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', { storage: (0, multer_1.memoryStorage)() })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [technical_skill_dto_1.TechnicalSkillDto, Object, Object]),
    __metadata("design:returntype", Promise)
], TechnicalController.prototype, "upload", null);
__decorate([
    (0, common_1.Get)("get"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TechnicalController.prototype, "get", null);
exports.TechnicalController = TechnicalController = __decorate([
    (0, common_1.Controller)('/skills/technical'),
    __metadata("design:paramtypes", [technical_service_1.TechnicalService])
], TechnicalController);
//# sourceMappingURL=technical.controller.js.map