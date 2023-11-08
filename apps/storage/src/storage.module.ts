import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageController } from './storage.controller';
import { PrismaService } from 'apps/movies/src/prisma.service';

@Module({
  imports: [],
  controllers: [StorageController],
  providers: [StorageService, PrismaService],
})
export class StorageModule {}
