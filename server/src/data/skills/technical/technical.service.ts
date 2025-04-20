/* eslint-disable prettier/prettier */  
import { Injectable, InternalServerErrorException } from '@nestjs/common';  
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
    ) {}  

    async createSkill(skill: TechnicalSkillDto, image: Express.Multer.File) {  
        try {  
            const { name, percentage, type } = skill;  
            const img = await this.cloudinary.uploadImage(image);  

            if (img instanceof Error) {  
                throw new InternalServerErrorException('Error uploading image to Cloudinary');  
            }  

            const upload = new this.skill({  
                image: { public_id: img.public_id, url: img.url },  
                type,  
                name,  
                percentage,  
            });  

            return await upload.save();  
        } catch (error: unknown) {  
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            throw new InternalServerErrorException('Error interno del servidor al crear la habilidad técnica: ' + errorMessage);  
        }  
    }  

    async getAllSkills() {  
        try {  
            return await this.skill.find();  
        } catch (error: unknown) {  
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            throw new InternalServerErrorException('Error interno del servidor al obtener las habilidades técnicas: ' + errorMessage);  
        }  
    }  
}  