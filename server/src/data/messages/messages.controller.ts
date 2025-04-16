/* eslint-disable prettier/prettier */

import { Body, Controller, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesDto } from 'src/dto/messages.dto';
import { MailService } from 'src/libs/mail/mail.service';

@Controller('messages')
export class MessagesController {
    constructor(private service: MessagesService, private mail: MailService) { }

    @Post('/new')
    async createMessage(@Body() data: MessagesDto) {
        const send = await this.service.createMessage(data) as MessagesDto;
        await this.mail.sendContactMessage(data);
        return { state: true, message: 'Mensaje enviado', data: send };
    }
}
