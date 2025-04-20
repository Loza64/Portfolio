/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
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

    async createProject(project: ProjectDto, image: Express.Multer.File): Promise<Projects> {

        try {
            const img = await this.cloudinary.uploadImage(image);
            const { description, title, url } = project

            if (img instanceof Error) {
                throw new Error('Error uploading image');
            }

            const newProject = new this.projects({
                title,
                description,
                url,
                image: { public_id: img.public_id, url: img.url }
            });

            return await newProject.save();
        } catch {
            throw new Error('Error creating project dsvdsddd');
        }
    }

    async getAllProjects() {
        try {
            return await this.projects.find();
        } catch {
            throw new Error('Error getting projects');

        }
    }
}
