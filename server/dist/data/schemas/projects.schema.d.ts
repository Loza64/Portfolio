import { Document } from 'mongoose';
export declare class Links {
    github?: string | null;
    app?: string | null;
}
export declare class Image {
    url: string;
    public_id: string;
}
export declare class Projects extends Document {
    title: string;
    description: string;
    image: Image;
    links: Links;
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
