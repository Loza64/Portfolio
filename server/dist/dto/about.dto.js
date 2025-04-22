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
exports.AboutDto = void 0;
const class_validator_1 = require("class-validator");
class AboutDto {
    date;
    title;
    description;
}
exports.AboutDto = AboutDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^\d{4}-\d{2}-\d{2}$/, {
        message: 'Date must be in the format YYYY-MM-DD.'
    }),
    __metadata("design:type", String)
], AboutDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(5, 50),
    (0, class_validator_1.Matches)(/^(?! )[A-Za-zÀ-ÿ0-9\s-]+$/, {
        message: 'Title must be between 5 and 50 characters and must not start with a space.'
    }),
    __metadata("design:type", String)
], AboutDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(10, 500),
    (0, class_validator_1.Matches)(/^[A-Za-zÀ-ÿ0-9\s.,!()-]+$/, {
        message: 'Description must be between 10 and 500 characters and can include letters, numbers, and certain punctuation.'
    }),
    __metadata("design:type", String)
], AboutDto.prototype, "description", void 0);
//# sourceMappingURL=about.dto.js.map