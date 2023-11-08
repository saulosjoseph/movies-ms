import { NestFactory } from '@nestjs/core';
import { AvaliationModule } from './avaliation.module';

async function bootstrap() {
  const app = await NestFactory.create(AvaliationModule);
  await app.listen(3000);
}
bootstrap();
