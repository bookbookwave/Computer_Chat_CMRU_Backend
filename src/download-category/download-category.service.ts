import { Injectable } from '@nestjs/common';
import { DownloadCategory, DownloadCategoryCreateInput } from '../@generated';
import { PrismaService } from '../prisma.service';

@Injectable()
export class DownloadCategoryService {
  constructor(private readonly db: PrismaService) {}
  downloadCategory = async (id: string): Promise<DownloadCategory> => {
    try {
      return await this.db.downloadCategory.findFirst({ where: { id: id } });
    } catch (error) {
      throw new Error(error.message);
    }
  };
  downloadCategories = async (): Promise<DownloadCategory[]> => {
    try {
      return await this.db.downloadCategory.findMany();
    } catch (error) {
      throw new Error(error.message);
    }
  };
  createDownloadCategory = async (
    input: DownloadCategoryCreateInput,
  ): Promise<DownloadCategory> => {
    try {
      return await this.db.downloadCategory.create({
        data: { name: input.name },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
  updateDownloadCategory = async (
    input: DownloadCategoryCreateInput,
  ): Promise<DownloadCategory> => {
    try {
      return await this.db.downloadCategory.update({
        where: { id: input.id },
        data: {
          name: input.name,
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
  deleteDownloadCategory = async (id: string): Promise<boolean> => {
    try {
      const data = await this.db.downloadCategory.delete({
        where: {
          id: id,
        },
      });
      if (!data) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(error.messager);
    }
  };
}
