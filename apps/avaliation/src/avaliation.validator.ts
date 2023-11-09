import { ApiProperty } from '@nestjs/swagger';
import { Avaliation } from '@prisma/client';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userEmail: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  comment: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  avaliation: number;
}

export class AvaliationDto implements Avaliation {
  @ApiProperty()
  id: number;

  @ApiProperty()
  comment: string;

  @ApiProperty()
  userEmail: string;

  @ApiProperty()
  avaliation: number;

  @ApiProperty()
  movieId: number;
}
