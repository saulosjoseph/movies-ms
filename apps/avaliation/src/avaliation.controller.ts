import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { AvaliationService } from './avaliation.service';
import { CreateDto } from './avaliation.validator';
import { Avaliation } from '@prisma/client';
import { ClientProxy } from '@nestjs/microservices';

@Controller('avaliation')
export class AvaliationController {
  constructor(
    private readonly avaliationService: AvaliationService,
    @Inject('CLASSIFICATION_SERVICE') private client: ClientProxy,
  ) {}
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
    let response: Avaliation;
    const exist = await this.avaliationService.read(movieId, create.userEmail);
    if (exist) {
      response = await this.avaliationService.update(
        exist.id,
        create.avaliation,
        create.comment,
      );
    } else {
      response = await this.avaliationService.create(create, movieId);
    }
    this.client.emit<string>('avaliation_done', movieId);
    return response;
  }
}
