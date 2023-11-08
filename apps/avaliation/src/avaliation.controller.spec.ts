import { Test, TestingModule } from '@nestjs/testing';
import { AvaliationController } from './avaliation.controller';
import { AvaliationService } from './avaliation.service';

describe('AvaliationController', () => {
  let avaliationController: AvaliationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AvaliationController],
      providers: [AvaliationService],
    }).compile();

    avaliationController = app.get<AvaliationController>(AvaliationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(avaliationController.getHello()).toBe('Hello World!');
    });
  });
});
