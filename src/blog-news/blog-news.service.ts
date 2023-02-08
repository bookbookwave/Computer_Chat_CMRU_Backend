import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { blogNews, blogNewsUncheckedCreateInput } from '../@generated';

@Injectable()
export class BlogNewsService {
  constructor(private readonly db: PrismaService) {}
  findBlogNewsById = async (id: string): Promise<blogNews> => {
    try {
      return await this.db.blogNews.findFirst({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  BlogNews(): Promise<blogNews[]> {
    try {
      return this.db.blogNews.findMany({});
    } catch (error) {
      throw new Error(error);
    }
  }
  createBlogNews = async (
    input: blogNewsUncheckedCreateInput,
  ): Promise<blogNews> => {
    try {
      return await this.db.blogNews.create({
        data: {
          content: input.content,
          title: input.title,
          link: input.link,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  updateBlogNews = async (
    input: blogNewsUncheckedCreateInput,
  ): Promise<blogNews> => {
    try {
      return await this.db.blogNews.update({
        where: {
          id: input.id,
        },
        data: {
          content: input.content,
          title: input.title,
          link: input.link,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
  deleteBlogNews = async (id: string): Promise<boolean> => {
    try {
      const blog = await this.db.blogNews.delete({
        where: {
          id,
        },
      });
      if (!blog) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(error);
    }
  };
}
