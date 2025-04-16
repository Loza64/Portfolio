/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Projects } from '../schemas/projects.schema';
import { Model } from 'mongoose';
import { ProjectDto } from 'src/dto/projects.dto';
import { Image } from 'src/interfaces/models';

@Injectable()
export class ProjectsService {
    constructor(@InjectModel(Projects.name) private  projects: Model<Projects>) { }

    async createProject(project: ProjectDto, image:Image) {
        const newProject = new this.projects({...project, image });
        return await newProject.save();
    }
    async getAllProjects() {
        return await this.projects.find();
    }
}
