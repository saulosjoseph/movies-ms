import { NestFactory } from '@nestjs/core';
import { AvaliationModule } from './avaliation.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AvaliationModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3002);
}
bootstrap();
