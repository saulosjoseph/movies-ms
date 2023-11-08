import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Movie, Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.MovieCreateInput): Promise<Movie> {
    return this.prisma.movie.create({
      data,
    });
  }
}
