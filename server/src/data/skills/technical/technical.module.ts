/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TechnicalService } from './technical.service';
import { TechnicalController } from './technical.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TechnicalSkill, TechnicalSkillSchema } from 'src/data/schemas/skills.technical.schema';
import { CloudinaryService } from 'src/libs/cloudinary/cloudinary.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: TechnicalSkill.name, schema: TechnicalSkillSchema }])],
  providers: [TechnicalService, CloudinaryService],
  controllers: [TechnicalController],
})
export class TechnicalModule { }
