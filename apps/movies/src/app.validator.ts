import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Movie } from '@prisma/client';
import { FileDto } from 'apps/storage/src/storage.validator';
import { AvaliationDto } from 'apps/avaliation/src/avaliation.validator';
import { ClassificationDto } from 'apps/classification/src/classification.validator';

export class CreateDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  year: number;
}

export class SaveCoverDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  cover: Express.Multer.File;
}

export class MovieDto implements Movie {
  @ApiProperty()
  @IsNumber()
  id: number;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNumber()
  year: number;

  @ApiProperty()
  @IsOptional()
  cover?: FileDto;

  @ApiProperty()
  @IsOptional()
  avaliation?: AvaliationDto;

  @ApiProperty()
  @IsOptional()
  classification?: ClassificationDto
}
