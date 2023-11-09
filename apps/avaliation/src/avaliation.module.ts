import { Module } from '@nestjs/common';
import { AvaliationController } from './avaliation.controller';
import { AvaliationService } from './avaliation.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { validate } from 'env.validation';
import { PrismaService } from '../../../prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate
    }),
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
export class AvaliationModule { }
