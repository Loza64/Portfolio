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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesController = void 0;
const common_1 = require("@nestjs/common");
const messages_service_1 = require("./messages.service");
const messages_dto_1 = require("../../dto/messages.dto");
const mail_service_1 = require("../../libs/mail/mail.service");
let MessagesController = class MessagesController {
    service;
    mail;
    constructor(service, mail) {
        this.service = service;
        this.mail = mail;
    }
    responseMessage(res, status, message, result) {
        return res.status(status).json({
            state: status >= 200 && status < 300,
            message,
            ...(result ? { result } : undefined)
        });
    }
    async createMessage(data, res) {
        try {
            const send = await this.service.createMessage(data);
            await this.mail.sendContactMessage(data);
            return this.responseMessage(res, common_1.HttpStatus.CREATED, 'Message send successfully', send);
        }
        catch (error) {
            return this.responseMessage(res, common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Error sending message', error);
        }
    }
};
exports.MessagesController = MessagesController;
__decorate([
    (0, common_1.Post)('/new'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [messages_dto_1.MessagesDto, Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "createMessage", null);
exports.MessagesController = MessagesController = __decorate([
    (0, common_1.Controller)('messages'),
    __metadata("design:paramtypes", [messages_service_1.MessagesService, mail_service_1.MailService])
], MessagesController);
//# sourceMappingURL=messages.controller.js.map