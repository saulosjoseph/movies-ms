import { Injectable } from '@nestjs/common';
import { Movie, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.MovieCreateInput): Promise<Movie> {
    return this.prisma.movie.create({
      data,
    });
  }
  async get(id: number): Promise<Movie> {
    return this.prisma.movie.findUnique({
      where: {
        id: id,
      },
      include: {
        cover: true,
      },
    });
  }
  async list(): Promise<Array<Movie>> {
    return this.prisma.movie.findMany({
      include: {
        cover: true,
      },
    });
  }
  async delete(id: number): Promise<Movie> {
    return this.prisma.movie.delete({
      where: {
        id: id,
      },
    });
  }
}
