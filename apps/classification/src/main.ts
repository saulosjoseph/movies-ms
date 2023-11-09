import { NestFactory } from '@nestjs/core';
import { ClassificationModule } from './classification.module';

async function bootstrap() {
  const app = await NestFactory.create(ClassificationModule);
  await app.listen(3000);
}
bootstrap();
