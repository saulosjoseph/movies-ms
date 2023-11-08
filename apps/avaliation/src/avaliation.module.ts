import { Module } from '@nestjs/common';
import { AvaliationController } from './avaliation.controller';
import { AvaliationService } from './avaliation.service';
import { PrismaService } from 'apps/movies/src/prisma.service';

@Module({
  imports: [],
  controllers: [AvaliationController],
  providers: [AvaliationService, PrismaService],
})
export class AvaliationModule {}
