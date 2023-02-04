import { Injectable } from '@nestjs/common';
import { File, FileUncheckedCreateInput } from 'src/@generated';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FileUploadService {
  constructor(private readonly db: PrismaService) {}

  getFilesByRoom = async (id: string): Promise<File[]> => {
    try {
      return await this.db.file.findMany({
        where: { messageRoomId: id },
        include: { messageRoom: true, status: true },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  findFile = async (id: string): Promise<File> => {
    try {
      return await this.db.file.findFirst({ where: { id: id } });
    } catch (error) {
      throw new Error(error);
    }
  };
  getFiles = async (): Promise<File[]> => {
    try {
      return await this.db.file.findMany();
    } catch (error) {
      throw new Error(error);
    }
  };
  getFilesById = async (id: string): Promise<File[]> => {
    try {
      return await this.db.file.findMany({
        where: { projectId: id },
        include: { project: true, status: true },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  createFile = async (input: FileUncheckedCreateInput): Promise<File> => {
    try {
      console.log('input :>> ', input);
      if (input.projectId) {
        await this.db.project.update({
          where: { id: input.projectId },
          data: { status: { connect: { id: input.statusId } } },
        });
        return await this.db.file.create({
          data: {
            file: input.file,
            comment: input.comment,
            fileName: input.fileName,
            status: { connect: { id: input.statusId } },
            project: { connect: { id: input.projectId } },
          },
        });
      }
      if (input.messageRoomId) {
        console.log('input :>> ', input);
        return await this.db.file.create({
          data: {
            file: input.file,
            comment: input.comment,
            fileName: input.fileName,
            status: { connect: { id: input.statusId } },
            messageRoom: { connect: { id: input.messageRoomId } },
          },
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  updateFile = async (input: FileUncheckedCreateInput): Promise<File> => {
    try {
      return await this.db.file.update({
        where: { id: input.id },
        data: input,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  deleteFile = async (id: string): Promise<boolean> => {
    try {
      const file = await this.db.file.findFirst({ where: { id: id } });
      if (!file) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(error);
    }
  };
}
