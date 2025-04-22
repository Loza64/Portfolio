import { Projects } from '../schemas/projects.schema';
import { Model } from 'mongoose';
import { ProjectDto } from 'src/dto/projects.dto';
import { CloudinaryService } from 'src/libs/cloudinary/cloudinary.service';
export declare class ProjectsService {
    private projects;
    private cloudinary;
    constructor(projects: Model<Projects>, cloudinary: CloudinaryService);
    createProject(project: ProjectDto, image: Express.Multer.File): Promise<Projects>;
    getAllProjects(): Promise<Projects[]>;
}
