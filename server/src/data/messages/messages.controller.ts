/* eslint-disable prettier/prettier */

import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesDto } from 'src/dto/messages.dto';
import { MailService } from 'src/libs/mail/mail.service';
import { Response } from 'express';

@Controller('messages')
export class MessagesController {
    constructor(private service: MessagesService, private mail: MailService) { }

    private responseMessage(res: Response, status: number, message: string, result?: unknown) {
        return res.status(status).json({
            state: status >= 200 && status < 300,
            message,
            ...(result ? { result } : undefined)
        });
    }

    @Post('/new')
    async createMessage(@Body() data: MessagesDto, @Res() res: Response) {
        try {
            const send = await this.service.createMessage(data) as MessagesDto;
            await this.mail.sendContactMessage(data);
            return this.responseMessage(res, HttpStatus.CREATED, 'Message send successfully', send);
        } catch (error) {
            return this.responseMessage(res, HttpStatus.INTERNAL_SERVER_ERROR, 'Error sending message', error);
        }
    }
}
