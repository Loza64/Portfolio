/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Projects } from '../schemas/projects.schema';
import { Model } from 'mongoose';
import { ProjectDto } from 'src/dto/projects.dto';
import { CloudinaryService } from 'src/libs/cloudinary/cloudinary.service';

@Injectable()
export class ProjectsService {
    constructor(
        @InjectModel(Projects.name) private projects: Model<Projects>,
        private cloudinary: CloudinaryService,
    ) { }

    async createProject(project: ProjectDto, file: Express.Multer.File): Promise<Projects> {
        try {
            const image = await this.cloudinary.uploadImage(file);
            const { description, title, links } = project;

            if (image instanceof Error) {
                throw new InternalServerErrorException('Error uploading image to Cloudinary');
            }

            const newProject = new this.projects({ title, description, links, image });
            return await newProject.save();
            
        } catch (error) {
            if (error instanceof Error) {
                throw new InternalServerErrorException('Error creating project: ' + error.message);
            }
            throw new InternalServerErrorException('Error creating project: An unknown error occurred');
        }
    }

    async getAllProjects(): Promise<Projects[]> {
        try {
            return await this.projects.find();
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new InternalServerErrorException('Error retrieving projects: ' + error.message);
            }
            throw new InternalServerErrorException('Error retrieving projects: An unknown error occurred');
        }
    }
}  