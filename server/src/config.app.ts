/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { config } from "dotenv";
config();

export const configMailer = {
    transport: {
        host: process.env.MAIL_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        }, defaults: {
            from: '"Portfolio Web" <noreply@example.com>',
        }
    }
}