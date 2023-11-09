import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class StorageService {
  constructor(private configService: ConfigService) {}
  async create(file: File): Promise<string> {
    return `${this.configService.get('host')}/cover/${file.name}`;
  }
}
