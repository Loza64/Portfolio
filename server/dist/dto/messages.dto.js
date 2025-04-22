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
exports.MessagesDto = void 0;
const class_validator_1 = require("class-validator");
class MessagesDto {
    firstname;
    lastname;
    email;
    phone;
    message;
}
exports.MessagesDto = MessagesDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.Matches)(/^(?! )[A-Za-zÀ-ÿ]+( [A-Za-zÀ-ÿ]+)*$/, {
        message: 'Firstname must be at least 2 characters long and must not start with a space.',
    }),
    __metadata("design:type", String)
], MessagesDto.prototype, "firstname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.Matches)(/^(?! )[A-Za-zÀ-ÿ]+( [A-Za-zÀ-ÿ]+)*$/, {
        message: 'Lastname must be at least 2 characters long and must not start with a space.',
    }),
    __metadata("design:type", String)
], MessagesDto.prototype, "lastname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/, {
        message: 'Email format is invalid.',
    }),
    __metadata("design:type", String)
], MessagesDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.Matches)(/^\+?[1-9]\d{1,14}([ -]?[\d()]+)*$/, {
        message: 'Phone number is invalid.',
    }),
    __metadata("design:type", String)
], MessagesDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(20),
    (0, class_validator_1.Matches)(/^[a-zA-ZÁ-ÿ0-9\s.,()-]+$/, {
        message: 'Message can only contain certain characters.',
    }),
    __metadata("design:type", String)
], MessagesDto.prototype, "message", void 0);
//# sourceMappingURL=messages.dto.js.map