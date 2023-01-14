import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Category, CategoryCreateInput } from './../@generated';
import { CategoryService } from './category.service';

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query((returns) => Category)
  async category(@Args('id') id: string): Promise<Category> {
    return await this.categoryService.getCategory(id);
  }

  @Query((returns) => [Category])
  async categories(): Promise<Category[]> {
    return await this.categoryService.allCategory();
  }

  @Mutation((returns) => Category)
  async createCategory(
    @Args('input') input: CategoryCreateInput,
  ): Promise<Category> {
    return await this.categoryService.createCategory(input);
  }

  @Mutation((returns) => Category)
  async updateCategory(
    @Args('input') input: CategoryCreateInput,
  ): Promise<Category> {
    return await this.categoryService.updateCategory(input);
  }

  @Mutation((returns) => Boolean)
  async deleteCategory(@Args('id') id: string): Promise<boolean> {
    return await this.categoryService.deleteCategory(id);
  }
}
