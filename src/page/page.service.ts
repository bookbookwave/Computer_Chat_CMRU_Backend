import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Page, PageUncheckedCreateInput } from './../@generated';

@Injectable()
export class PageService {
  constructor(private readonly db: PrismaService) {}
  async getPage(id: string): Promise<Page> {
    try {
      return await this.db.page.findFirst({ where: { id: id } });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async allPages(): Promise<Page[]> {
    try {
      return await this.db.page.findMany();
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async createPage(
    input: Omit<PageUncheckedCreateInput, 'thumbnail'> & { thumbnail: string },
  ): Promise<Page> {
    try {
      return await this.db.page.create({
        data: {
          title: input.title,
          thumbnail: input.thumbnail,
          view: 0,
          content: input.content,
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
  async updatePage(
    input: Omit<PageUncheckedCreateInput, 'thumbnail'> & { thumbnail: string },
  ): Promise<Page> {
    try {
      return await this.db.page.update({
        where: { id: input.id },
        data: {
          title: input.title,
          thumbnail: input.thumbnail,
          content: input.content,
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
  async deletePage(id: string): Promise<boolean> {
    try {
      const data = await this.db.page.delete({ where: { id: id } });
      if (!data) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
