import { MessagesService } from './messages.service';
import { MessagesDto } from 'src/dto/messages.dto';
import { MailService } from 'src/libs/mail/mail.service';
import { Response } from 'express';
export declare class MessagesController {
    private service;
    private mail;
    constructor(service: MessagesService, mail: MailService);
    private responseMessage;
    createMessage(data: MessagesDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
