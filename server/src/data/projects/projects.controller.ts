/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectDto } from 'src/dto/projects.dto';
import { memoryStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/libs/cloudinary/cloudinary.service';

@Controller('projects')
export class ProjectsController {

    constructor(
        private readonly service: ProjectsService,
        private readonly cloudinary: CloudinaryService
    ) { }

    @Post('/save')
    @UseInterceptors(FileInterceptor('image', { storage: memoryStorage() }))
    async createProject(@Body() project: ProjectDto, @UploadedFile() image: Express.Multer.File) {
        const { title, description, url } = project;
        const upload = await this.cloudinary.uploadImage(image);
        if (upload instanceof Error) {
            return { error: upload.message };
        } else {
            const upload_project = await this.service.createProject(
                { title, description, url },
                { url: upload.url, public_id: upload.public_id }
            );

            return { state: 'success', message: 'project uploaded', upload_project };
        }

    }

    @Get('/get/all')
    async getProjects() {
        const list = await this.service.getAllProjects();

        if (list.length === 0) {
            return { state: 'error', message: 'No projects found' };
        } else {
            return { state: 'success', message: 'Projects found', list };
        }
    }
}
