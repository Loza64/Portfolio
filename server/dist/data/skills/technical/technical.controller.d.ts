import { TechnicalService } from './technical.service';
import { TechnicalSkillDto } from 'src/dto/technical.skill.dto';
import { Response } from 'express';
export declare class TechnicalController {
    private service;
    constructor(service: TechnicalService);
    private responseMessage;
    upload(body: TechnicalSkillDto, image: Express.Multer.File, res: Response): Promise<Response<any, Record<string, any>>>;
    get(res: Response): Promise<Response<any, Record<string, any>>>;
}
