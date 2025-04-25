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
exports.ProjectSchema = exports.Projects = exports.Image = exports.Links = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let Links = class Links {
    github;
    app;
};
exports.Links = Links;
__decorate([
    (0, mongoose_2.Prop)({ required: false, maxlength: 100, default: null, type: String }),
    __metadata("design:type", Object)
], Links.prototype, "github", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: false, maxlength: 500, default: null, type: String }),
    __metadata("design:type", Object)
], Links.prototype, "app", void 0);
exports.Links = Links = __decorate([
    (0, mongoose_2.Schema)({ versionKey: false })
], Links);
let Image = class Image {
    url;
    public_id;
};
exports.Image = Image;
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", String)
], Image.prototype, "url", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", String)
], Image.prototype, "public_id", void 0);
exports.Image = Image = __decorate([
    (0, mongoose_2.Schema)({ versionKey: false })
], Image);
let Projects = class Projects extends mongoose_1.Document {
    title;
    description;
    image;
    links;
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
    (0, mongoose_2.Prop)({ required: true, type: Image, _id: false }),
    __metadata("design:type", Image)
], Projects.prototype, "image", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: false, maxlength: 400, type: Links, _id: false }),
    __metadata("design:type", Links)
], Projects.prototype, "links", void 0);
exports.Projects = Projects = __decorate([
    (0, mongoose_2.Schema)({ versionKey: false })
], Projects);
exports.ProjectSchema = mongoose_2.SchemaFactory.createForClass(Projects);
//# sourceMappingURL=projects.schema.js.map