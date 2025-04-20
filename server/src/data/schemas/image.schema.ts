/* eslint-disable prettier/prettier */
import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Image {
    @Prop({ required: true })
    url: string;

    @Prop({ required: true })
    public_id: string;
}
