/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import { ProfessionalController } from './professional.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfessionalSkill, ProfessionalSkillSchema } from 'src/data/schemas/skill.professional.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ProfessionalSkill.name, schema: ProfessionalSkillSchema }])],
  providers: [ProfessionalService],
  controllers: [ProfessionalController]
})
export class ProfessionalModule { }
