import { ApiProperty } from '@nestjs/swagger';
import { Classification } from '@prisma/client';

export class ClassificationDto implements Classification {
  @ApiProperty()
  id: number;

  @ApiProperty()
  classification: number;

  @ApiProperty()
  movieId: number;
}
