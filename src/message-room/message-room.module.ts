import { Module } from '@nestjs/common';
import { MessageRoomService } from './message-room.service';
import { MessageRoomResolver } from './message-room.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [MessageRoomService, MessageRoomResolver, PrismaService],
})
export class MessageRoomModule {}
