// import { Injectable } from '@nestjs/common';
// import { MessageRoom, MessageRoomUncheckedCreateInput } from 'src/@generated';
// import { PrismaService } from 'src/prisma.service';

// @Injectable()
// export class MessageRoomService {
//   constructor(private readonly db: PrismaService) {}
//   findRoom = async (id: string): Promise<MessageRoom> => {
//     try {
//       return await this.db.messageRoom.findFirst({ where: { id: id } });
//     } catch (error) {
//       throw new Error(error);
//     }
//   };
//   getRoom = async (): Promise<MessageRoom[]> => {
//     try {
//       return await this.db.messageRoom.findMany();
//     } catch (error) {
//       throw new Error(error);
//     }
//   };
//   createRoom = async (
//     input: MessageRoomUncheckedCreateInput,
//   ): Promise<MessageRoom> => {
//     try {
//       return await this.db.messageRoom.create({
//         data: {
//           name: input.name,
//           author: { connect: { id: input.userId } },
//           project: { connect: { id: input.projectId } },
//         },
//       });
//     } catch (error) {
//       throw new Error(error);
//     }
//   };
//   updateRoom = async (
//     input: MessageRoomUncheckedCreateInput,
//   ): Promise<MessageRoom> => {
//     try {
//       return await this.db.messageRoom.update({
//         where: { id: input.id },
//         data: { name: input.name, author: { connect: { id: input.userId } } },
//       });
//     } catch (error) {
//       throw new Error(error);
//     }
//   };
//   deleteRoom = async (id: string): Promise<boolean> => {
//     try {
//       const room = await this.db.messageRoom.delete({ where: { id: id } });
//       if (!room) {
//         return false;
//       }
//       return true;
//     } catch (error) {
//       throw new Error(error);
//     }
//   };
// }
