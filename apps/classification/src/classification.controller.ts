import { Controller, Get } from '@nestjs/common';
import { ClassificationService } from './classification.service';

@Controller()
export class ClassificationController {
  constructor(private readonly classificationService: ClassificationService) {}

  @Get()
  getHello(): string {
    return this.classificationService.getHello();
  }
}
