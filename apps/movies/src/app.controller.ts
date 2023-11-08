import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './app.validator';
import { Movie } from '@prisma/client';

@Controller('movies')
export class AppController {
  constructor(private readonly appService: AppService) {}
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
