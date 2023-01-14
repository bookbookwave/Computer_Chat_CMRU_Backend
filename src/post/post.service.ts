import { Post, PostUncheckedCreateInput } from './../@generated';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly db: PrismaService) {}

  async post(id: string): Promise<Post> {
    return await this.db.post.findFirst({ where: { id: id } });
  }
  async getAll(): Promise<Post[]> {
    return await this.db.post.findMany();
  }
  async createPost(
    input: Omit<PostUncheckedCreateInput, 'thumbnail'> & { thumbnail: string },
  ): Promise<Post> {
    return await this.db.post.create({
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
        category: {
          connect: {
            id: input.categoryId,
          },
        },
      },
    });
  }
  async updatePost(
    input: Omit<PostUncheckedCreateInput, 'thumbnail'> & { thumbnail: string },
  ): Promise<Post> {
    return await this.db.post.update({
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
        category: {
          connect: {
            id: input.categoryId,
          },
        },
      },
    });
  }
  async deletePost(id: string): Promise<boolean> {
    const data = await this.db.post.delete({ where: { id: id } });
    if (!data) {
      return true;
    }
    return false;
  }
}
