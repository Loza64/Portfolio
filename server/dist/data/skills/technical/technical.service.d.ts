import { Model } from 'mongoose';
import { TechnicalSkill } from 'src/data/schemas/skills.technical.schema';
import { TechnicalSkillDto } from 'src/dto/technical.skill.dto';
import { CloudinaryService } from 'src/libs/cloudinary/cloudinary.service';
export declare class TechnicalService {
    private skill;
    private cloudinary;
    constructor(skill: Model<TechnicalSkill>, cloudinary: CloudinaryService);
    createSkill(skill: TechnicalSkillDto, image: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, TechnicalSkill> & TechnicalSkill & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllSkills(): Promise<(import("mongoose").Document<unknown, {}, TechnicalSkill> & TechnicalSkill & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
}
