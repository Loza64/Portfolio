/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */

import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { join } from "path";

export const configMailer = {
    transport: {
        host: process.env.MAIL_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        }, defaults: {
            from: '"Portfolio Web" <noreply@example.com>',
        },
        template: {
            dir: join(__dirname, 'templates'),
            adapter: new HandlebarsAdapter(),
            options: {
                strict: true,
            },
        },
    }
}