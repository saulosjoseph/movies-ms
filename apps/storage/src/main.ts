import { NestFactory } from '@nestjs/core';
import { StorageModule } from './storage.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(StorageModule);
  app.useStaticAssets(join(__dirname, '..', 'storage/static'), {
    prefix: '/cover',
  });
  await app.listen(3001);
}
bootstrap();
