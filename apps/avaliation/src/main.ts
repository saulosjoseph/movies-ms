import { NestFactory } from '@nestjs/core';
import { AvaliationModule } from './avaliation.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AvaliationModule);
  const config = new DocumentBuilder()
    .setTitle('Avaliation')
    .setDescription('Avaliation microservice')
    .setVersion('1.0')
    .addTag('microservice')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3002);
}
bootstrap();
