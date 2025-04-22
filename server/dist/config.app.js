"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configPipe = exports.configMailer = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.configMailer = {
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
};
exports.configPipe = {
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true
};
//# sourceMappingURL=config.app.js.map