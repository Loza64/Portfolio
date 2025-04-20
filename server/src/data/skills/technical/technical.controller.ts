/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { TechnicalService } from './technical.service';
import { TechnicalSkillDto } from 'src/dto/technical.skill.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { Response } from 'express';

@Controller('/skills/technical')
export class TechnicalController {

    constructor(private service: TechnicalService) { }

    private responseMessage(res: Response, status: number, message: string, result?: any) {
        return res.status(status).json({ state: status >= 200 && status < 300, message, ...(result && { result }) });
    }

    @Post("upload")
    @UseInterceptors(FileInterceptor('image', { storage: memoryStorage() }))
    async upload(@Body() body: TechnicalSkillDto, @UploadedFile() image: Express.Multer.File, @Res() res: Response) {
        try {
            const skill = await this.service.createSkill(body, image);
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
