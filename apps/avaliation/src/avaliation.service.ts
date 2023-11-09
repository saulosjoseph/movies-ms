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
  async read(movieId: number, userEmail: string): Promise<Avaliation> {
    return this.prisma.avaliation.findFirst({
      where: { movieId, userEmail },
    });
  }
  async update(
    id: number,
    avaliation: number,
    comment: string,
  ): Promise<Avaliation> {
    return this.prisma.avaliation.update({
      where: { id },
      data: {
        avaliation,
        comment,
      },
    });
  }
}
