/* eslint-disable prettier/prettier */
import { Prop, Schema } from "@nestjs/mongoose";
import { Image } from "./image.schema";
import { SchemaFactory } from "@nestjs/mongoose";


@Schema({ versionKey: false })
export class TechnicalSkill {

    @Prop({ required: true, maxlength: 100, _id: false })
    image: Image;

    @Prop({ required: true, maxlength: 100 })
    type: string;

    @Prop({ required: true, unique: true, maxlength: 100 })
    name: string;

    @Prop({ required: true, max: 100, min: 0 })
    percentage: number;
}

export const TechnicalSkillSchema = SchemaFactory.createForClass(TechnicalSkill);