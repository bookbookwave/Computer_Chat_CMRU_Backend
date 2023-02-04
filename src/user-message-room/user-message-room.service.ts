import { Injectable } from '@nestjs/common';
import {
  UserMessageRoom,
  UserMessageRoomUncheckedCreateInput,
} from 'src/@generated';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserMessageRoomService {
  constructor(private readonly db: PrismaService) {}

  findMessageRoomByUserIdAndGetUserId = async (id: string): Promise<any> => {
    try {
      const userMessageRoom = await this.db.userMessageRoom.findMany({
        where: { user: { id: id } },
        include: { user: true, messageRoom: true },
      });
      const result = userMessageRoom.map((item) => {
        return this.db.userMessageRoom.findMany({
          where: { messageRoom: { id: item.messageRoom.id } },
          include: { messageRoom: true, user: true },
        });
      });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  };
  findMessageRoomByRoomId = async (id: string): Promise<UserMessageRoom[]> => {
    try {
      return await this.db.userMessageRoom.findMany({
        where: { messageRoom: { id: id } },
        include: { user: true, messageRoom: true },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  findMessageRoomByUserId = async (id: string): Promise<UserMessageRoom[]> => {
    try {
      return await this.db.userMessageRoom.findMany({
        where: { user: { id: id } },
        include: { messageRoom: true, user: true },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  findMessageRoomByUserIdAndRoomId(): Promise<UserMessageRoom[]> {
    try {
      return this.db.userMessageRoom.findMany({
        include: { messageRoom: true, user: true },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  createMessageRoom = async (
    input: UserMessageRoomUncheckedCreateInput,
  ): Promise<UserMessageRoom> => {
    try {
      return await this.db.userMessageRoom.create({
        data: {
          user: { connect: { id: input.userId } },
          messageRoom: { connect: { id: input.messageRoomId } },
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  createManyUserMessageRoom = async (
    input: Array<UserMessageRoomUncheckedCreateInput>,
  ): Promise<boolean> => {
    try {
      console.log('input :>> ', input);
      const room = await this.db.userMessageRoom.createMany({
        data: input,
      });
      return true;
    } catch (error) {
      throw new Error(error);
    }
  };

  updateMessageRoom = async (
    input: UserMessageRoomUncheckedCreateInput,
  ): Promise<UserMessageRoom> => {
    try {
      return await this.db.userMessageRoom.update({
        where: {
          userId_messageRoomId: {
            userId: input.userId,
            messageRoomId: input.messageRoomId,
          },
        },
        data: {
          user: { connect: { id: input.userId } },
          messageRoom: { connect: { id: input.messageRoomId } },
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  deleteMessageRoom = async (id: string): Promise<boolean> => {
    try {
      const messageRoom = await this.db.userMessageRoom.delete({
        where: { userId_messageRoomId: { userId: id, messageRoomId: id } },
      });
      if (!messageRoom) {
        return false;
      }
      return true;
    } catch (error) {
      throw new Error(error);
    }
  };
}
