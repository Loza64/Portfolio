/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, Get, Post, Body, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectDto } from 'src/dto/projects.dto';
import { memoryStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller('projects')
export class ProjectsController {
    constructor(
        private readonly service: ProjectsService,
    ) { }

    private responseMessage(res: Response, status: number, message: string, result?: unknown) {
        return res.status(status).json({
            state: status >= 200 && status < 300,
            message,
            ...(result ? { result } : undefined)
        });
    }

    @Post('/save')
    @UseInterceptors(FileInterceptor('image', { storage: memoryStorage() }))
    async createProject(@Body() project: ProjectDto, @UploadedFile() image: Express.Multer.File, @Res() res: Response) {
        try {
            const upload_project = await this.service.createProject(project, image);
            return this.responseMessage(res, 201, 'Project created successfully', upload_project);
        } catch (error) {
            return this.responseMessage(res, 500, 'Error creating project', error);
        }
    }

    @Get('/get/all')
    async getProjects(@Res() res: Response) {
        try {
            const result = await this.service.getAllProjects();
            if (result.length === 0) return this.responseMessage(res, 404, 'No projects found', null)
            return this.responseMessage(res, 200, 'Projects found', result);
        } catch (error) {
            return this.responseMessage(res, 500, 'Error getting projects', error);
        }
    }
}  