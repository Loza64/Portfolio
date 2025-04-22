"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionalModule = void 0;
const common_1 = require("@nestjs/common");
const professional_service_1 = require("./professional.service");
const professional_controller_1 = require("./professional.controller");
const mongoose_1 = require("@nestjs/mongoose");
const skill_professional_schema_1 = require("../../schemas/skill.professional.schema");
let ProfessionalModule = class ProfessionalModule {
};
exports.ProfessionalModule = ProfessionalModule;
exports.ProfessionalModule = ProfessionalModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: skill_professional_schema_1.ProfessionalSkill.name, schema: skill_professional_schema_1.ProfessionalSkillSchema }])],
        providers: [professional_service_1.ProfessionalService],
        controllers: [professional_controller_1.ProfessionalController]
    })
], ProfessionalModule);
//# sourceMappingURL=professional.module.js.map