/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey: false })
export class About {
    @Prop({ required: true })
    date: string;

    @Prop({ required: true, unique: true })
    title: string;

    @Prop({ required: true })
    description: string
}

export const AboutSchema = SchemaFactory.createForClass(About);