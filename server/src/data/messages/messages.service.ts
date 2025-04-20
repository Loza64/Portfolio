/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessagesDto } from 'src/dto/messages.dto';
import { Messages } from 'src/data/schemas/messages.schema';

@Injectable()
export class MessagesService {
    constructor(@InjectModel(Messages.name) private readonly messages: Model<Messages>) { }

    async createMessage(message: MessagesDto) {  
        try {  
            const newMessage = new this.messages(message);  
            return await newMessage.save();  
        } catch (error: unknown) {  
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            throw new InternalServerErrorException('Error interno del servidor al subir el mensaje: ' + errorMessage);  
        }  
    }
}
