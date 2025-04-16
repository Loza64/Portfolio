import { Module } from '@nestjs/common';
import { MailService } from './mail.service'; // Ensure this is the correct service

@Module({
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
