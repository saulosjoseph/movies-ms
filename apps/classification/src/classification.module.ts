import { Module } from '@nestjs/common';
import { ClassificationController } from './classification.controller';
import { ClassificationService } from './classification.service';
import { PrismaService } from '../../../prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from 'env.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate
    })
  ],
  controllers: [ClassificationController],
  providers: [ClassificationService, PrismaService],
})
export class ClassificationModule { }
