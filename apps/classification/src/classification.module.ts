import { Module } from '@nestjs/common';
import { ClassificationController } from './classification.controller';
import { ClassificationService } from './classification.service';
import { PrismaService } from 'apps/movies/src/prisma.service';

@Module({
  imports: [],
  controllers: [ClassificationController],
  providers: [ClassificationService, PrismaService],
})
export class ClassificationModule {}
