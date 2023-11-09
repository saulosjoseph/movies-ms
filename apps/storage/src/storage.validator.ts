import { ApiProperty } from '@nestjs/swagger';
import { File } from '@prisma/client';

export class FileDto implements File {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    fileName: string;
  
    @ApiProperty()
    contentType: string;
  
    @ApiProperty()
    url: string;
  
    @ApiProperty()
    movieId: number;
  }