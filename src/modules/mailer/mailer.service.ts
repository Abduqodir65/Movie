import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

@Injectable()
export class MailerService {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.your-email-provider.com',  
            port: 587, 
            secure: false,
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.USER_EMAIL_PASS,
            },
        });
    }

    async sendMail(name: string, email: string, subject: string, message: string): Promise<void> {
        try {
            await this.transporter.sendMail({
                from: process.env.USER_EMAIL,  
                to: email,                    
                subject: subject,            
                html: message,                
            });
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            throw new Error('Failed to send email');
        }
    }
    
}