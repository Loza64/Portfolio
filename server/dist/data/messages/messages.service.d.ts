import { Model } from 'mongoose';
import { MessagesDto } from 'src/dto/messages.dto';
import { Messages } from 'src/data/schemas/messages.schema';
export declare class MessagesService {
    private readonly messages;
    constructor(messages: Model<Messages>);
    createMessage(message: MessagesDto): Promise<import("mongoose").Document<unknown, {}, Messages> & Messages & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
