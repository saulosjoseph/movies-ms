import { Controller } from '@nestjs/common';
import { ClassificationService } from './classification.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class ClassificationController {
  constructor(private readonly classificationService: ClassificationService) {}
  @EventPattern('avaliation_done')
  accumulate(movieId: number): void {
    console.log(movieId);
  }
}
