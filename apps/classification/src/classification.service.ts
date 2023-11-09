import { Injectable } from '@nestjs/common';
import { Avaliation, Classification } from '@prisma/client';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class ClassificationService {
  constructor(private prisma: PrismaService) {}
  getAvaliations(movieId: number): Promise<Array<Avaliation>> {
    return this.prisma.avaliation.findMany({
      where: { movieId },
    });
  }
  calculate(avaliations: Array<Avaliation>): number {
    const justNumbers = avaliations.map((avaliation) => avaliation.avaliation);
    return (
      justNumbers.reduce((sum, number) => sum + number) / justNumbers.length
    );
  }
  save(movieId: number, classification: number): Promise<Classification> {
    return this.prisma.classification.upsert({
      where: { movieId },
      update: {
        classification,
      },
      create: {
        movieId,
        classification,
      },
    });
    // return this.prisma.classification.create({
    //   data: {
    //     movieId,
    //     classification,
    //   },
    // });
  }
}
