import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ExpressAdapter, NestExpressApplication} from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';




async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(8000);
}
bootstrap();
