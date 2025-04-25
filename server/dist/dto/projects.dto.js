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
exports.ProjectDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class LinksDto {
    github;
    app;
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], LinksDto.prototype, "github", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], LinksDto.prototype, "app", void 0);
class ProjectDto {
    title;
    description;
    links;
}
exports.ProjectDto = ProjectDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 50),
    (0, class_validator_1.Matches)(/^(?! )[A-Za-zÀ-ÿ0-9\s-]+$/, {
        message: 'Title must be between 2 and 50 characters and must not start with a space.',
    }),
    __metadata("design:type", String)
], ProjectDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(10, 500),
    (0, class_validator_1.Matches)(/^[A-Za-zÀ-ÿ0-9\s.:,!()-_]+$/, {
        message: 'Description must be between 10 and 500 characters and can include letters, numbers, and certain punctuation.',
    }),
    __metadata("design:type", String)
], ProjectDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => LinksDto),
    __metadata("design:type", LinksDto)
], ProjectDto.prototype, "links", void 0);
//# sourceMappingURL=projects.dto.js.map