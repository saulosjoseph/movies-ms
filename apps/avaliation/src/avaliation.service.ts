import { Injectable } from '@nestjs/common';
import { Avaliation, Prisma } from '@prisma/client';
import { PrismaService } from 'apps/movies/src/prisma.service';

@Injectable()
export class AvaliationService {
  constructor(private prisma: PrismaService) {}
  async create(
    data: Prisma.AvaliationCreateWithoutMovieInput,
    movieId: number,
  ): Promise<Avaliation> {
    return this.prisma.avaliation.create({
      data: {
        ...data,
        movie: {
          connect: {
            id: movieId,
          },
        },
      },
    });
  }
}
