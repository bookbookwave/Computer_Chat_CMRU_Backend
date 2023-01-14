import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DownloadCategoryService } from './download-category.service';
import { DownloadCategory, DownloadCategoryCreateInput } from '../@generated';

@Resolver()
export class DownloadCategoryResolver {
  constructor(
    private readonly downloadCategoryService: DownloadCategoryService,
  ) {}
  @Query((returns) => DownloadCategory)
  async downloadCategory(@Args('id') id: string): Promise<DownloadCategory> {
    return this.downloadCategoryService.downloadCategory(id);
  }
  @Query((returns) => DownloadCategory)
  async downloadCategories(): Promise<DownloadCategory[]> {
    return this.downloadCategoryService.downloadCategories();
  }
  @Mutation((returns) => DownloadCategory)
  async createDownloadCategory(
    @Args('input') input: DownloadCategoryCreateInput,
  ): Promise<DownloadCategory> {
    return this.downloadCategoryService.createDownloadCategory(input);
  }
  @Mutation((returns) => DownloadCategory)
  async updateDownloadCategory(
    @Args('input') input: DownloadCategoryCreateInput,
  ): Promise<DownloadCategory> {
    return this.downloadCategoryService.updateDownloadCategory(input);
  }
  @Mutation((returns) => Boolean)
  async deleteDownloadCategory(@Args('id') id: string): Promise<boolean> {
    return this.downloadCategoryService.deleteDownloadCategory(id);
  }
}
