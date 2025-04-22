import { Image } from "./image.schema";
export declare class TechnicalSkill {
    image: Image;
    type: string;
    name: string;
    percentage: number;
}
export declare const TechnicalSkillSchema: import("mongoose").Schema<TechnicalSkill, import("mongoose").Model<TechnicalSkill, any, any, any, import("mongoose").Document<unknown, any, TechnicalSkill> & TechnicalSkill & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TechnicalSkill, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<TechnicalSkill>> & import("mongoose").FlatRecord<TechnicalSkill> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
