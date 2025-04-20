/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProjectsModule } from './data/projects/projects.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesModule } from './data/messages/messages.module';
import { MailerModule } from '@nestjs-modules/mailer';;
import { TechnicalModule } from './data/skills/technical/technical.module';
import { ProfessionalModule } from './data/skills/professional/professional.module';
import { configMailer } from './config.app';
import { AboutModule } from './data/about/about.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    MongooseModule.forRoot(process.env.MONGO_CLUSTER || ''),
    MailerModule.forRoot(configMailer),
    MessagesModule,
    ProjectsModule,
    TechnicalModule,
    ProfessionalModule,
    AboutModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
