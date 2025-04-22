import { ProfessionalService } from './professional.service';
import { ProfessionalSkillDto } from 'src/dto/professional.skill.dto';
import { Response } from 'express';
export declare class ProfessionalController {
    private service;
    constructor(service: ProfessionalService);
    private responseMessage;
    upload(body: ProfessionalSkillDto, res: Response): Promise<Response<any, Record<string, any>>>;
    get(res: Response): Promise<Response<any, Record<string, any>>>;
}
