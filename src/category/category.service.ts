import { Category, CategoryCreateInput } from './../@generated';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly db: PrismaService) {}

  async getCategory(id: string): Promise<Category> {
    try {
      return await this.db.category.findFirst({ where: { id: id } });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async allCategory(): Promise<Category[]> {
    try {
      return await this.db.category.findMany();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async createCategory(input: CategoryCreateInput): Promise<Category> {
    try {
      return await this.db.category.create({
        data: { name: input.name },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async updateCategory(input: CategoryCreateInput): Promise<Category> {
    try {
      return await this.db.category.update({
        where: { id: input.id },
        data: { name: input.name },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async deleteCategory(id: string): Promise<boolean> {
    try {
      const data = await this.db.category.delete({ where: { id: id } });
      if (!data) {
        return false;
      }
      return true;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
