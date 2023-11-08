import { Injectable } from '@nestjs/common';
import { PrismaService } from 'apps/movies/src/prisma.service';
import { File, Prisma } from '@prisma/client';

@Injectable()
export class StorageService {
  constructor(private prisma: PrismaService) {}
  async create(
    file: Express.Multer.File,
    protocol: string,
    host: string,
    movieId: number,
  ): Promise<File> {
    return this.prisma.file.create({
      data: {
        fileName: file.filename,
        contentType: file.mimetype,
        url: `${protocol}://${host}/cover/${file.filename}`,
        movie: {
          connect: {
            id: movieId,
          },
        },
      },
    });
  }
}
