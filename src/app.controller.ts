import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from './app.validator';
import { Movie } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  async create(@Body() createUserDto: CreateDto): Promise<Movie> {
    return this.appService.create(createUserDto);
  }
}
