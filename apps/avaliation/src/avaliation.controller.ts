import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AvaliationService } from './avaliation.service';
import { CreateDto } from './avaliation.validator';
import { Avaliation } from '@prisma/client';

@Controller('avaliation')
export class AvaliationController {
  constructor(private readonly avaliationService: AvaliationService) {}

  @Post(':id')
  async createUpdate(
    @Param('id', ParseIntPipe) movieId: number,
    @Body() create: CreateDto,
  ): Promise<Avaliation> {
    if (create.avaliation < 1 || create.avaliation > 5) {
      throw new HttpException(
        'Avaliation out of range',
        HttpStatus.BAD_REQUEST,
      );
    }
    const exist = await this.avaliationService.read(movieId, create.userEmail);
    if (exist) {
      return this.avaliationService.update(
        movieId,
        create.avaliation,
        create.comment,
      );
    } else {
      return await this.avaliationService.create(create, movieId);
    }
  }
}
