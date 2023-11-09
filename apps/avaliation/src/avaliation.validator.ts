import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateDto {
  @IsString()
  @IsNotEmpty()
  userEmail: string;

  @IsString()
  @IsOptional()
  comment: string;

  @IsNumber()
  @IsNotEmpty()
  avaliation: number;
}
