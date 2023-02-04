import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserMessageRoomResolver } from './user-message-room.resolver';
import { UserMessageRoomService } from './user-message-room.service';

@Module({
  providers: [UserMessageRoomResolver, UserMessageRoomService, PrismaService],
})
export class UserMessageRoomModule {}
