/* eslint-disable prettier/prettier */
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailMessage } from 'src/interfaces/models';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) { }

  async sendContactMessage({ message, name, email, phone }: MailMessage) {
    await this.mailerService.sendMail({
      to: 'robertoloxa88@gmail.com',
      subject: 'Nuevo mensaje de contacto desde el portfolio web',
      html: this.generateEmailTemplate({ message, name, email, phone }),
      context: {
        recipientName: 'Roberto',
        message: message,
        name: name,
        email: email,
        phone: phone,
        replyTo: email || 'robertoloxa88@gmail.com',
        currentYear: new Date().getFullYear(),
        logoUrl: 'https://tusitio.com/logo.png'
      },
    });
  }

  private generateEmailTemplate({ message, name, email, phone }: MailMessage): string {
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
      background-color: #4a6baf;
      color: white;
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
      line-height: 40px; /* Igual que la altura del logo */
    }
    .content {
      background-color: white;
      padding: 30px;
      border-radius: 0 0 8px 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .message-box {
      background-color: #f5f5f5;
      padding: 15px;
      border-left: 4px solid #4a6baf;
      margin: 20px 0;
      font-style: italic;
      white-space: pre-line;
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
      background-color: #4a6baf;
      color: white !important;
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
      ${email ? '<img src="https://res.cloudinary.com/ufostart-development/image/upload/v1744770507/PORTFOLIO/iiqojpnrwpicsp7i3ttl.png" alt="Logo" class="logo">' : ''}
      <h1>Portfolio Web</h1>
    </div>
    <h2>Nuevo mensaje de contacto</h2>
  </div>
  
  <div class="content">
    <p>Hola Roberto,</p>
    <p>Has recibido un nuevo mensaje a través del formulario de contacto:</p>
    
    <div class="message-box">
      ${message.replace(/\n/g, '<br>')}
    </div>
    
    <p>Detalles del contacto:</p>
    <ul>
      ${name ? `<li><strong>Nombre:</strong> ${name}</li>` : ''}
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
}