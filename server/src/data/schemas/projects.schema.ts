import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Image {
  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  public_id: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);

@Schema()
export class Projects extends Document {
  @Prop({ required: true, unique: true, maxlength: 100 })
  title: string;

  @Prop({ required: true, maxlength: 500 })
  description: string;

  @Prop({ required: true, type: Image, _id: false })
  image: Image;

  @Prop({ required: false, maxlength: 400, default: null })
  url: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Projects);
