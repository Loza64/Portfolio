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
exports.ProjectsController = void 0;
const common_1 = require("@nestjs/common");
const projects_service_1 = require("./projects.service");
const projects_dto_1 = require("../../dto/projects.dto");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
let ProjectsController = class ProjectsController {
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
    async createProject(project, image, res) {
        try {
            const upload_project = await this.service.createProject(project, image);
            return this.responseMessage(res, 201, 'Project created successfully', upload_project);
        }
        catch (error) {
            return this.responseMessage(res, 500, 'Error creating project', error);
        }
    }
    async getProjects(res) {
        try {
            const result = await this.service.getAllProjects();
            if (result.length === 0)
                return this.responseMessage(res, 404, 'No projects found', null);
            return this.responseMessage(res, 200, 'Projects found', result);
        }
        catch (error) {
            return this.responseMessage(res, 500, 'Error getting projects', error);
        }
    }
};
exports.ProjectsController = ProjectsController;
__decorate([
    (0, common_1.Post)('/save'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', { storage: (0, multer_1.memoryStorage)() })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [projects_dto_1.ProjectDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "createProject", null);
__decorate([
    (0, common_1.Get)('/get/all'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getProjects", null);
exports.ProjectsController = ProjectsController = __decorate([
    (0, common_1.Controller)('projects'),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsController);
//# sourceMappingURL=projects.controller.js.map