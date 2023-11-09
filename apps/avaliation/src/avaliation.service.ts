import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Avaliation, Prisma } from '@prisma/client';
import { PrismaService } from 'apps/movies/src/prisma.service';

@Injectable()
export class AvaliationService {
  constructor(private prisma: PrismaService) { }
  async create(
    data: Prisma.AvaliationCreateWithoutMovieInput,
    movieId: number,
  ): Promise<Avaliation> {
    try {
      const created = await this.prisma.avaliation.create({
        data: {
          ...data,
          movie: {
            connect: {
              id: movieId,
            },
          },
        },
      });
      return created
    } catch (error) {
      throw new HttpException(
        'Movie do not exist.',
        HttpStatus.NO_CONTENT,
      );
    }

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
