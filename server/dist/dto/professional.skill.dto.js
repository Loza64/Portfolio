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
exports.ProfessionalSkillDto = void 0;
const class_validator_1 = require("class-validator");
class ProfessionalSkillDto {
    name;
    percentage;
}
exports.ProfessionalSkillDto = ProfessionalSkillDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    (0, class_validator_1.Matches)(/^(?! )[A-Za-zÀ-ÿ0-9\s-]+$/, {
        message: 'Name must be between 1 and 50 characters and must not start with a space.'
    }),
    __metadata("design:type", String)
], ProfessionalSkillDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0, { message: 'Percentage must be at least 0.' }),
    (0, class_validator_1.Max)(100, { message: 'Percentage must not exceed 100.' }),
    __metadata("design:type", Number)
], ProfessionalSkillDto.prototype, "percentage", void 0);
//# sourceMappingURL=professional.skill.dto.js.map