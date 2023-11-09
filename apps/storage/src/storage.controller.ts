import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { StorageService } from './storage.service';

@Controller()
export class StorageController {
  constructor(private storageService: StorageService) {}
  @MessagePattern({ cmd: 'save' })
  save(@Payload() data: Express.Multer.File): string {
    const name = uuidv4();
    const type = data.originalname.split('.')[1];
    const path = `${join(__dirname, '..', 'storage/static/')}${name}.${type}`;
    return this.storageService.create(
      name,
      type,
      path,
      Buffer.from(data.buffer),
    );
  }
}
