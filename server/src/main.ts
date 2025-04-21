import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { HttpExceptionFilter } from './filter/htttp.exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { configPipe } from './config.app';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe(configPipe));
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
