import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Download, DownloadUncheckedCreateInput } from './../@generated';

@Injectable()
export class DownloadService {
  constructor(private readonly db: PrismaService) {}
  async getDownload(id: string): Promise<Download> {
    try {
      return await this.db.download.findFirst({ where: { id: id } });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async allDownload(): Promise<Download[]> {
    try {
      return await this.db.download.findMany();
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async createDownload(
    input: Omit<DownloadUncheckedCreateInput, 'thumbnail'> & {
      thumbnail: string;
    },
  ): Promise<Download> {
    try {
      return await this.db.download.create({
        data: input,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async updateDownload(
    input: Omit<DownloadUncheckedCreateInput, 'thumbnail'> & {
      thumbnail: string;
    },
  ): Promise<Download> {
    try {
      return await this.db.download.update({
        where: { id: input.id },
        data: {
          link: input.link,
          thumbnail: input.thumbnail,
          downloadCategory: {
            connect: {
              id: input.downloadCategoryId,
            },
          },
          author: {
            connect: {
              id: input.userId,
            },
          },
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async deleteDownload(id: string): Promise<boolean> {
    try {
      const data = await this.db.download.delete({ where: { id: id } });
      if (data === undefined) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
