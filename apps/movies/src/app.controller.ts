import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './app.validator';
import { Movie, File } from '@prisma/client';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('movie')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('STORAGE_SERVICE') private client: ClientProxy,
  ) {}
  @Post(':id/cover/')
  @UseInterceptors(AnyFilesInterceptor())
  async uploadFile(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<File> {
    const url = await firstValueFrom(
      this.client.send<string>({ cmd: 'save' }, files[0]),
    );
    return this.appService.saveCover(files[0], url, id);
  }
  @Post()
  async create(@Body() createUserDto: CreateDto): Promise<Movie> {
    return this.appService.create(createUserDto);
  }
  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number): Promise<Movie> {
    return this.appService.get(id);
  }
  @Get()
  async list(): Promise<Array<Movie>> {
    return this.appService.list();
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Movie> {
    return this.appService.delete(id);
  }
}
