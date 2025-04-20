/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AboutService } from './about.service';
import { AboutDto } from 'src/dto/about.dto';

@Controller('about')
export class AboutController {
    constructor(private readonly service: AboutService) { }

    private responseMessage(res: Response, status: number, message: string, result?: unknown) {
        return res.status(status).json({
            state: status >= 200 && status < 300,
            message,
            ...(result ? { result } : undefined)
        });
    }

    @Post("/upload")
    async uploadInfo(@Body() body: AboutDto, @Res() res: Response) {
        try {
            const upload = await this.service.create(body);
            return this.responseMessage(res, 201, "Info save success", upload)
        } catch (error) {
            return this.responseMessage(res, 500, "Internal server error", error)
        }
    }

    @Get("get/list")
    async getList(@Res() res: Response) {
        try {
            const list = await this.service.getList();
            if (list.length == 0) return this.responseMessage(res, 404, "No info about")
            return this.responseMessage(res, 200, "Info list", list)
        } catch (error) {
            return this.responseMessage(res, 500, "Internal server error", error)
        }
    }
}
