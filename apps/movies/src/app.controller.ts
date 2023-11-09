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
import { ApiConsumes, ApiBody, ApiOperation, ApiResponse, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CreateDto, MovieDto, SaveCoverDto } from './app.validator';
import { Movie } from '@prisma/client';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { FileDto } from 'apps/storage/src/storage.validator';

@Controller('movie')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('STORAGE_SERVICE') private client: ClientProxy,
  ) { }
  @Post(':id/cover/')
  @ApiOperation({ summary: 'Save cover image' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: SaveCoverDto,
  })
  @ApiResponse({ status: 200, type: FileDto })
  @UseInterceptors(AnyFilesInterceptor())
  async uploadFile(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<FileDto> {
    const url = await firstValueFrom(
      this.client.send<string>({ cmd: 'save' }, files[0]),
    );
    return this.appService.saveCover(files[0], url, id);
  }
  @Post()
  @ApiOperation({ summary: 'Create movie' })
  @ApiBody({
    type: CreateDto,
  })
  @ApiResponse({ status: 200, type: FileDto })
  async create(@Body() createUserDto: CreateDto): Promise<Movie> {
    return this.appService.create(createUserDto);
  }
  @Get(':id')
  @ApiResponse({ status: 200, type: MovieDto })
  @ApiResponse({ status: 400, description: 'Movie do not exist.' })
  async get(@Param('id', ParseIntPipe) id: number): Promise<Movie> {
    return this.appService.get(id);
  }
  @Get()
  @ApiOperation({ summary: 'List movies' })
  @ApiOkResponse({
    type: MovieDto,
    isArray: true
  }
  )
  async list(): Promise<Array<Movie>> {
    return this.appService.list();
  }
  @Delete(':id')
  @ApiResponse({ status: 400, description: 'Movie do not exist.' })
  @ApiResponse({ status: 200, type: MovieDto })
  async delete(@Param('id', ParseIntPipe) id: number): Promise<Movie> {
    return this.appService.delete(id);
  }
}
