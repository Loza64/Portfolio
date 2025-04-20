import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Messages extends Document {
  @Prop({ required: true, maxlength: 100 })
  name: string;

  @Prop({ required: true, maxlength: 100 })
  lastname: string;

  @Prop({ required: true, maxlength: 100 })
  phone: string;

  @Prop({ required: true, maxlength: 100 })
  email: string;

  @Prop({ required: true, maxlength: 100 })
  message: string;
}
export const MessagesSchema = SchemaFactory.createForClass(Messages);
