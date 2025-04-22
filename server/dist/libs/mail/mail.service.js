"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let MailService = class MailService {
    mailerService;
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendContactMessage({ message, firstname, lastname, email, phone }) {
        await this.mailerService.sendMail({
            to: 'robertoloxa88@gmail.com',
            subject: 'Nuevo mensaje de contacto desde el portfolio web',
            html: this.generateEmailTemplate({ message, firstname, lastname, email, phone }),
            context: {
                recipientName: 'Roberto',
                message: message,
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone,
                replyTo: email || 'robertoloxa88@gmail.com',
                currentYear: new Date().getFullYear(),
                logoUrl: 'https://tusitio.com/logo.png'
            },
        });
    }
    generateEmailTemplate({ message, firstname, lastname, email, phone }) {
        return `
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo mensaje de contacto</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 0;
            background-color: #f9f9f9;
        }

        .header {

            background-color: rgb(15, 15, 15);
            color: rgb(153, 255, 0);
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }

        .brand {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-bottom: 10px;
        }

        .logo {
            width: 40px;
            height: 40px;
            object-fit: contain;
            vertical-align: middle;
        }

        h1 {
            margin: 0;
            display: inline-block;
            vertical-align: middle;
            line-height: 40px;
            /* Igual que la altura del logo */
        }

        .content {
            background-color: white;
            padding: 30px;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .message-box {
            background-color: #f5f5f5;
            padding: 10px;
            border-left: 4px solid black;
            margin: 10px 0;
            font-style: italic;
            white-space: pre-line;
            font-weight: 900;
        }

        .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            color: #777;
        }

        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: rgb(153, 255, 0);
            color: black !important;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <div class="header">
        <div class="brand">
            <h1>Portfolio Web</h1>
        </div>
        <h2>Nuevo mensaje de contacto</h2>
    </div>

    <div class="content">
        <p>Hola Roberto,</p>
        <p>Has recibido un nuevo mensaje a través del formulario de contacto:</p>

        <div class="message-box">  
            <p>${message}</p>
        </div>  

        <p>Detalles del contacto:</p>
        <ul>
            ${firstname ? `<li><strong>Nombre:</strong> ${firstname}</li>` : ''}
            ${lastname ? `<li><strong>Apellido:</strong> ${lastname}</li>` : ''}
            ${email ? `<li><strong>Email:</strong> ${email}</li>` : ''}
            ${phone ? `<li><strong>Teléfono:</strong> ${phone}</li>` : ''}
        </ul>

        <center>
            <a href="mailto:${email || 'robertoloxa88@gmail.com'}" class="button">Responder al mensaje</a>
        </center>

        <div class="footer">
            <p>Este mensaje fue enviado automáticamente desde tu portfolio web.</p>
            <p>© ${new Date().getFullYear()} - Todos los derechos reservados</p>
        </div>
    </div>
</body>
</html>
`;
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailService);
//# sourceMappingURL=mail.service.js.map