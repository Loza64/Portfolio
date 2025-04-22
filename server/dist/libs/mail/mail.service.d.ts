import { MailerService } from '@nestjs-modules/mailer';
import { MailMessage } from 'src/interfaces/models';
export declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendContactMessage({ message, firstname, lastname, email, phone }: MailMessage): Promise<void>;
    private generateEmailTemplate;
}
