/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TechnicalSkill } from 'src/data/schemas/skills.technical.schema';
import { TechnicalSkillDto } from 'src/dto/technical.skill.dto';
import { CloudinaryService } from 'src/libs/cloudinary/cloudinary.service';

@Injectable()
export class TechnicalService {

    constructor(
        @InjectModel(TechnicalSkill.name) private skill: Model<TechnicalSkill>,
        private cloudinary: CloudinaryService,
    ) { }


    async createSkill(skill: TechnicalSkillDto, image: Express.Multer.File,) {
        const { name, percentage, type } = skill;

        const img = await this.cloudinary.uploadImage(image);
        if (img instanceof Error) {
            throw new Error('Error uploading image');
        }

        const upload = new this.skill({
            image: { public_id: img.public_id, url: img.url },
            type,
            name,
            percentage,
        });
        return await upload.save();
    }

    async getAllSkills() {
        return await this.skill.find();
    }
}
