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
exports.ProjectSchema = exports.Projects = exports.ImageSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const image_schema_1 = require("./image.schema");
exports.ImageSchema = mongoose_2.SchemaFactory.createForClass(image_schema_1.Image);
let Projects = class Projects extends mongoose_1.Document {
    title;
    description;
    image;
    url;
};
exports.Projects = Projects;
__decorate([
    (0, mongoose_2.Prop)({ required: true, unique: true, maxlength: 100 }),
    __metadata("design:type", String)
], Projects.prototype, "title", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true, maxlength: 500 }),
    __metadata("design:type", String)
], Projects.prototype, "description", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true, type: image_schema_1.Image, _id: false }),
    __metadata("design:type", image_schema_1.Image)
], Projects.prototype, "image", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: false, maxlength: 400, default: null }),
    __metadata("design:type", String)
], Projects.prototype, "url", void 0);
exports.Projects = Projects = __decorate([
    (0, mongoose_2.Schema)({ versionKey: false })
], Projects);
exports.ProjectSchema = mongoose_2.SchemaFactory.createForClass(Projects);
//# sourceMappingURL=projects.schema.js.map