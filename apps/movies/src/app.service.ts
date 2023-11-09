import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Movie, Prisma, File } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) { }
  async create(data: Prisma.MovieCreateInput): Promise<Movie> {
    return this.prisma.movie.create({
      data,
    });
  }
  async get(id: number): Promise<Movie> {
    const exist = await this.prisma.movie.findUnique({
      where: {
        id: id,
      },
      include: {
        cover: true,
        classification: true,
        avaliations: true,
      },
    });
    if (exist) {
      return exist
    } else {
      throw new HttpException(
        'Movie do not exist.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async list(): Promise<Array<Movie>> {
    return this.prisma.movie.findMany({
      include: {
        cover: true,
        classification: true,
        avaliations: true,
      },
    });
  }
  async delete(id: number): Promise<Movie> {
    try {
      const deleted = await this.prisma.movie.delete({
        where: {
          id,
        },
      });
      return deleted
    } catch (error) {
      throw new HttpException(
        'Movie do not exist.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  async saveCover(
    file: Express.Multer.File,
    url: string,
    movieId: number,
  ): Promise<File> {
    return this.prisma.file.upsert({
      where: {
        movieId,
      },
      update: {
        fileName: file.originalname,
        contentType: file.mimetype,
        url,
      },
      create: {
        fileName: file.originalname,
        contentType: file.mimetype,
        url,
        movie: {
          connect: {
            id: movieId,
          },
        },
      },
    });
  }
}
