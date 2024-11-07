export declare class MailerService {
    private transporter;
    constructor();
    sendMail(name: string, email: string, subject: string, message: string): Promise<void>;
}
