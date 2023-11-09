import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import * as fs from 'fs';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

@Controller()
export class StorageController {
  constructor() {}
  @MessagePattern({ cmd: 'save' })
  save(@Payload() data: Express.Multer.File): string {
    const name = uuidv4();
    const path = `${join(__dirname, '..', 'storage/static/')}${name}.${
      data.originalname.split('.')[1]
    }`;
    fs.writeFileSync(path, Buffer.from(data.buffer));
    return `http://localhost:3001/cover/${name}.${
      data.originalname.split('.')[1]
    }`;
  }
}
