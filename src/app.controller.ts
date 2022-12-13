import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notification')
export class AppController {
  constructor(private readonly Prisma: PrismaService) {}

  @Get()
  list() {
    return this.Prisma.notification.findMany();
  }
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category} = body;

    await this.Prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
