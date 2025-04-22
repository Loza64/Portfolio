"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnicalModule = void 0;
const common_1 = require("@nestjs/common");
const technical_service_1 = require("./technical.service");
const technical_controller_1 = require("./technical.controller");
const mongoose_1 = require("@nestjs/mongoose");
const skills_technical_schema_1 = require("../../schemas/skills.technical.schema");
const cloudinary_service_1 = require("../../../libs/cloudinary/cloudinary.service");
let TechnicalModule = class TechnicalModule {
};
exports.TechnicalModule = TechnicalModule;
exports.TechnicalModule = TechnicalModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: skills_technical_schema_1.TechnicalSkill.name, schema: skills_technical_schema_1.TechnicalSkillSchema }])],
        providers: [technical_service_1.TechnicalService, cloudinary_service_1.CloudinaryService],
        controllers: [technical_controller_1.TechnicalController],
    })
], TechnicalModule);
//# sourceMappingURL=technical.module.js.map