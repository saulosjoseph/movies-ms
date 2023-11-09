import { Module } from '@nestjs/common';
import { AvaliationController } from './avaliation.controller';
import { AvaliationService } from './avaliation.service';
import { PrismaService } from 'apps/movies/src/prisma.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CLASSIFICATION_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://admin:admin@localhost:5672'],
          queue: 'classification_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AvaliationController],
  providers: [AvaliationService, PrismaService],
})
export class AvaliationModule {}
