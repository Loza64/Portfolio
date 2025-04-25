import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Links {
  @Prop({ required: false, maxlength: 100, default: null, type: String })
  github?: string | null;

  @Prop({ required: false, maxlength: 500, default: null, type: String })
  app?: string | null;
}

@Schema({ versionKey: false })
export class Image {
  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  public_id: string;
}

@Schema({ versionKey: false })
export class Projects extends Document {
  @Prop({ required: true, unique: true, maxlength: 100 })
  title: string;

  @Prop({ required: true, maxlength: 500 })
  description: string;

  @Prop({ required: true, type: Image, _id: false })
  image: Image;

  @Prop({ required: false, maxlength: 400, type: Links, _id: false })
  links: Links;
}

export const ProjectSchema = SchemaFactory.createForClass(Projects);
