import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Req,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import multerConfig from '../config/multer-config';
import { StorageService } from './storage.service';

@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @Post(':id')
  @UseInterceptors(FileInterceptor('cover', multerConfig))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.storageService.create(file, req.protocol, req.get('host'), id);
  }
}
