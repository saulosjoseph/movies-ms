import { Controller } from '@nestjs/common';
import { ClassificationService } from './classification.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class ClassificationController {
  constructor(private readonly classificationService: ClassificationService) {}
  @EventPattern('avaliation_done')
  async set(movieId: number): Promise<void> {
    await this.classificationService.save(
      movieId,
      this.classificationService.calculate(
        await this.classificationService.getAvaliations(movieId),
      ),
    );
  }
}
