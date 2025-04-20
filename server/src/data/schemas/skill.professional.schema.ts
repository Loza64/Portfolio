/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class ProfessionalSkill {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  percentage: number;
}

export const ProfessionalSkillSchema = SchemaFactory.createForClass(ProfessionalSkill);