import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { NoticationsRepository } from 'src/application/repositories/notifications-repository';
import { PrisaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NoticationsRepository,
      useClass: PrisaNotificationsRepository,
    }
  ],
  exports: [NoticationsRepository],

})

export class DatabaseModule {}