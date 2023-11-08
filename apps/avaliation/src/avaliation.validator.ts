import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateDto {
  @IsString()
  @IsNotEmpty()
  userEmail: string;

  @IsString()
  comment: string;

  @IsNumber()
  @IsNotEmpty()
  avaliation: number;
}
