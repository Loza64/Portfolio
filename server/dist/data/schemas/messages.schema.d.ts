import { Document } from 'mongoose';
export declare class Messages extends Document {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    message: string;
}
export declare const MessagesSchema: import("mongoose").Schema<Messages, import("mongoose").Model<Messages, any, any, any, Document<unknown, any, Messages> & Messages & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Messages, Document<unknown, {}, import("mongoose").FlatRecord<Messages>> & import("mongoose").FlatRecord<Messages> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
