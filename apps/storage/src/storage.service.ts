import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
@Injectable()
export class StorageService {
  constructor() {}
  create(name: string, type: string, path: string, file: Buffer): string {
    fs.writeFileSync(path, file);
    return `http://localhost:3001/cover/${name}.${type}`;
  }
}
