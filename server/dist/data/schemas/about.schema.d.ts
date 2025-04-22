export declare class About {
    date: string;
    title: string;
    description: string;
}
export declare const AboutSchema: import("mongoose").Schema<About, import("mongoose").Model<About, any, any, any, import("mongoose").Document<unknown, any, About> & About & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, About, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<About>> & import("mongoose").FlatRecord<About> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
