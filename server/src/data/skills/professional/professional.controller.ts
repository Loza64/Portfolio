/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import { ProfessionalSkillDto } from 'src/dto/professional.skill.dto';
import { Response } from 'express';

@Controller('/skills/professional')
export class ProfessionalController {

    constructor(private service: ProfessionalService) { }

    private responseMessage(res: Response, status: number, message: string, result?: any) {
        return res.status(status).json({ state: status >= 200 && status < 300, message, ...(result && { result }) });
    }

    @Post("upload")
    async upload(@Body() body: ProfessionalSkillDto, @Res() res: Response) {
        try {
            const skill = await this.service.createSkill(body);
            return this.responseMessage(res, 201, "Skill created successfully", skill);
        } catch (error) {
            return this.responseMessage(res, 500, "Error creating skill", error);
        }
    }

    @Get("get")
    async get(@Res() res: Response) {
        try {
            const skills = await this.service.getAllSkills();
            if (skills.length === 0) {
                return this.responseMessage(res, 404, "No skills found", null);
            }
            return this.responseMessage(res, 200, "Skills found", skills);
        } catch (error) {
            return this.responseMessage(res, 500, "Error getting skills", error);
        }
    }
}
