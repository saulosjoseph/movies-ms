import { Module } from '@nestjs/common';
import { ClassificationController } from './classification.controller';
import { ClassificationService } from './classification.service';

@Module({
  imports: [],
  controllers: [ClassificationController],
  providers: [ClassificationService],
})
export class ClassificationModule {}
