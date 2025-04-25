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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const projects_schema_1 = require("../schemas/projects.schema");
const mongoose_2 = require("mongoose");
const cloudinary_service_1 = require("../../libs/cloudinary/cloudinary.service");
let ProjectsService = class ProjectsService {
    projects;
    cloudinary;
    constructor(projects, cloudinary) {
        this.projects = projects;
        this.cloudinary = cloudinary;
    }
    async createProject(project, file) {
        try {
            const image = await this.cloudinary.uploadImage(file);
            const { description, title, links } = project;
            if (image instanceof Error) {
                throw new common_1.InternalServerErrorException('Error uploading image to Cloudinary');
            }
            const newProject = new this.projects({ title, description, links, image });
            return await newProject.save();
        }
        catch (error) {
            if (error instanceof Error) {
                throw new common_1.InternalServerErrorException('Error creating project: ' + error.message);
            }
            throw new common_1.InternalServerErrorException('Error creating project: An unknown error occurred');
        }
    }
    async getAllProjects() {
        try {
            return await this.projects.find();
        }
        catch (error) {
            if (error instanceof Error) {
                throw new common_1.InternalServerErrorException('Error retrieving projects: ' + error.message);
            }
            throw new common_1.InternalServerErrorException('Error retrieving projects: An unknown error occurred');
        }
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(projects_schema_1.Projects.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        cloudinary_service_1.CloudinaryService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map