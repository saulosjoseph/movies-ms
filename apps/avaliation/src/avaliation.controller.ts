import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AvaliationService } from './avaliation.service';
import { CreateDto } from './avaliation.validator';
import { Avaliation } from '@prisma/client';

@Controller('avaliation')
export class AvaliationController {
  constructor(private readonly avaliationService: AvaliationService) {}

  @Post(':id')
  async create(
    @Param('id', ParseIntPipe) movieId: number,
    @Body() createUserDto: CreateDto,
  ): Promise<Avaliation> {
    return await this.avaliationService.create(createUserDto, movieId);
  }
}
