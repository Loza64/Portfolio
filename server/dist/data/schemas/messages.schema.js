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
exports.MessagesSchema = exports.Messages = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let Messages = class Messages extends mongoose_1.Document {
    firstname;
    lastname;
    phone;
    email;
    message;
};
exports.Messages = Messages;
__decorate([
    (0, mongoose_2.Prop)({ required: true, maxlength: 100 }),
    __metadata("design:type", String)
], Messages.prototype, "firstname", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true, maxlength: 100 }),
    __metadata("design:type", String)
], Messages.prototype, "lastname", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true, maxlength: 100 }),
    __metadata("design:type", String)
], Messages.prototype, "phone", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true, maxlength: 100 }),
    __metadata("design:type", String)
], Messages.prototype, "email", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true, maxlength: 100 }),
    __metadata("design:type", String)
], Messages.prototype, "message", void 0);
exports.Messages = Messages = __decorate([
    (0, mongoose_2.Schema)({ versionKey: false })
], Messages);
exports.MessagesSchema = mongoose_2.SchemaFactory.createForClass(Messages);
//# sourceMappingURL=messages.schema.js.map