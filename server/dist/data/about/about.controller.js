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
exports.AboutController = void 0;
const common_1 = require("@nestjs/common");
const about_service_1 = require("./about.service");
const about_dto_1 = require("../../dto/about.dto");
let AboutController = class AboutController {
    service;
    constructor(service) {
        this.service = service;
    }
    responseMessage(res, status, message, result) {
        return res.status(status).json({
            state: status >= 200 && status < 300,
            message,
            ...(result ? { result } : undefined)
        });
    }
    async uploadInfo(body, res) {
        try {
            const upload = await this.service.create(body);
            return this.responseMessage(res, 201, "Info save success", upload);
        }
        catch (error) {
            return this.responseMessage(res, 500, "Internal server error", error);
        }
    }
    async getList(res) {
        try {
            const list = await this.service.getList();
            if (list.length == 0)
                return this.responseMessage(res, 404, "No info about");
            return this.responseMessage(res, 200, "Info list", list);
        }
        catch (error) {
            return this.responseMessage(res, 500, "Internal server error", error);
        }
    }
};
exports.AboutController = AboutController;
__decorate([
    (0, common_1.Post)("/upload"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [about_dto_1.AboutDto, Object]),
    __metadata("design:returntype", Promise)
], AboutController.prototype, "uploadInfo", null);
__decorate([
    (0, common_1.Get)("get/list"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AboutController.prototype, "getList", null);
exports.AboutController = AboutController = __decorate([
    (0, common_1.Controller)('about'),
    __metadata("design:paramtypes", [about_service_1.AboutService])
], AboutController);
//# sourceMappingURL=about.controller.js.map