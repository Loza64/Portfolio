/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProfessionalSkill } from 'src/data/schemas/skill.professional.schema';
import { ProfessionalSkillDto } from 'src/dto/professional.skill.dto';

@Injectable()
export class ProfessionalService {
    constructor(@InjectModel(ProfessionalSkill.name) private professionalSkill: Model<ProfessionalSkill>) { }

    async createSkill(skill: ProfessionalSkillDto) {
        try {
            const newSkill = new this.professionalSkill(skill);
            return await newSkill.save();
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            throw new InternalServerErrorException('Error interno del servidor al crear la habilidad: ' + errorMessage);
        }
    }

    async getAllSkills() {
        try {
            return await this.professionalSkill.find();
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            throw new InternalServerErrorException('Error interno del servidor al obtener las habilidades: ' + errorMessage);
        }
    }
}  