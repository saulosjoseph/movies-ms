import { Injectable } from '@nestjs/common';

@Injectable()
export class ClassificationService {
  getHello(): string {
    return 'Hello World!';
  }
}
