import { MailerService } from './mailer.service';
export declare class MailerController {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendMail(name: string, email: string, subject: string, message: string): Promise<{
        message: string;
    }>;
}
