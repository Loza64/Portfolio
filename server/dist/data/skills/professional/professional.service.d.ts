import { Model } from 'mongoose';
import { ProfessionalSkill } from 'src/data/schemas/skill.professional.schema';
import { ProfessionalSkillDto } from 'src/dto/professional.skill.dto';
export declare class ProfessionalService {
    private professionalSkill;
    constructor(professionalSkill: Model<ProfessionalSkill>);
    createSkill(skill: ProfessionalSkillDto): Promise<import("mongoose").Document<unknown, {}, ProfessionalSkill> & ProfessionalSkill & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllSkills(): Promise<(import("mongoose").Document<unknown, {}, ProfessionalSkill> & ProfessionalSkill & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
}
