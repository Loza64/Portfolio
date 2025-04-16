/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { Messages, MessagesSchema } from 'src/data/schemas/messages.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MailModule } from 'src/libs/mail/mail.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Messages.name, schema: MessagesSchema}]),
    MailModule
  ],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule { }
