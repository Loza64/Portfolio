import { Document } from 'mongoose';
import { Image } from './image.schema';
export declare const ImageSchema: import("mongoose").Schema<Image, import("mongoose").Model<Image, any, any, any, Document<unknown, any, Image> & Image & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Image, Document<unknown, {}, import("mongoose").FlatRecord<Image>> & import("mongoose").FlatRecord<Image> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Projects extends Document {
    title: string;
    description: string;
    image: Image;
    url: string;
}
export declare const ProjectSchema: import("mongoose").Schema<Projects, import("mongoose").Model<Projects, any, any, any, Document<unknown, any, Projects> & Projects & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Projects, Document<unknown, {}, import("mongoose").FlatRecord<Projects>> & import("mongoose").FlatRecord<Projects> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
