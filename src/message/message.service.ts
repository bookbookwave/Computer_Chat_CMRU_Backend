import { Injectable } from '@nestjs/common';
import { MessageUncheckedCreateInput } from 'src/@generated';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MessageService {
  constructor(private readonly db: PrismaService) {}

  findMessage = async (id: string): Promise<MessageUncheckedCreateInput> => {
    try {
      return await this.db.message.findFirst({ where: { id: id } });
    } catch (error) {
      throw new Error(error);
    }
  };
  getMessages = async (): Promise<MessageUncheckedCreateInput[]> => {
    try {
      return await this.db.message.findMany();
    } catch (error) {
      throw new Error(error);
    }
  };
  createMessage = async (
    input: MessageUncheckedCreateInput,
  ): Promise<MessageUncheckedCreateInput> => {
    try {
      return await this.db.message.create({
        data: {
          message: input.message,
          project: { connect: { id: input.projectId } },
          author: { connect: { id: input.userId } },
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  updateMessage = async (
    input: MessageUncheckedCreateInput,
  ): Promise<MessageUncheckedCreateInput> => {
    try {
      return await this.db.message.update({
        where: { id: input.id },
        data: {
          message: input.message,
          project: { connect: { id: input.projectId } },
          author: { connect: { id: input.userId } },
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  deleteMessage = async (id: string): Promise<boolean> => {
    try {
      const message = await this.db.message.delete({ where: { id: id } });
      if (!message) {
        return false;
      }
      return true;
    } catch (error) {
      throw new Error(error);
    }
  };
}
