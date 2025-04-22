import { ProjectsService } from './projects.service';
import { ProjectDto } from 'src/dto/projects.dto';
import { Response } from 'express';
export declare class ProjectsController {
    private readonly service;
    constructor(service: ProjectsService);
    private responseMessage;
    createProject(project: ProjectDto, image: Express.Multer.File, res: Response): Promise<Response<any, Record<string, any>>>;
    getProjects(res: Response): Promise<Response<any, Record<string, any>>>;
}
