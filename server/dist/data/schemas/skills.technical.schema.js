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
exports.TechnicalSkillSchema = exports.TechnicalSkill = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const image_schema_1 = require("./image.schema");
const mongoose_2 = require("@nestjs/mongoose");
let TechnicalSkill = class TechnicalSkill {
    image;
    type;
    name;
    percentage;
};
exports.TechnicalSkill = TechnicalSkill;
__decorate([
    (0, mongoose_1.Prop)({ required: true, maxlength: 100, _id: false }),
    __metadata("design:type", image_schema_1.Image)
], TechnicalSkill.prototype, "image", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, maxlength: 100 }),
    __metadata("design:type", String)
], TechnicalSkill.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, maxlength: 100 }),
    __metadata("design:type", String)
], TechnicalSkill.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, max: 100, min: 0 }),
    __metadata("design:type", Number)
], TechnicalSkill.prototype, "percentage", void 0);
exports.TechnicalSkill = TechnicalSkill = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false })
], TechnicalSkill);
exports.TechnicalSkillSchema = mongoose_2.SchemaFactory.createForClass(TechnicalSkill);
//# sourceMappingURL=skills.technical.schema.js.map