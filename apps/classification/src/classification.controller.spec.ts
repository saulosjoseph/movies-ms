import { Test, TestingModule } from '@nestjs/testing';
import { ClassificationController } from './classification.controller';
import { ClassificationService } from './classification.service';

describe('ClassificationController', () => {
  let classificationController: ClassificationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClassificationController],
      providers: [ClassificationService],
    }).compile();

    classificationController = app.get<ClassificationController>(ClassificationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(classificationController.getHello()).toBe('Hello World!');
    });
  });
});
