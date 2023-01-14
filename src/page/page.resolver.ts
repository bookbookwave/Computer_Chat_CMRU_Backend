import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UtilsService } from '../utils/utils.service';
import { Page } from './../@generated';
import { PageUncheckedCreateInput } from './../@generated/index';
import { PageService } from './page.service';

@Resolver()
export class PageResolver {
  constructor(
    private readonly pageService: PageService,
    private readonly utilService: UtilsService,
  ) {}

  @Query((returns) => Page)
  async page(@Args('id') id: string): Promise<Page> {
    return await this.pageService.getPage(id);
  }
  @Query((returns) => [Page])
  async pages(): Promise<Page[]> {
    return await this.pageService.allPages();
  }
  @Mutation((returns) => Page)
  async createPage(
    @Args('input') input: PageUncheckedCreateInput,
  ): Promise<Page> {
    let thumbnail = 'https://via.placeholder.com/150x150';
    if (input.thumbnail) {
      thumbnail = await this.utilService.singleUpload(input.thumbnail);
    }
    return await this.pageService.createPage({
      ...input,
      thumbnail: thumbnail,
    });
  }
  @Mutation((returns) => Page)
  async updatePage(
    @Args('input') input: PageUncheckedCreateInput,
  ): Promise<Page> {
    let thumbnail = 'https://via.placeholder.com/150x150';
    if (input.thumbnail) {
      thumbnail = await this.utilService.singleUpload(input.thumbnail);
    }
    return await this.pageService.updatePage({
      ...input,
      thumbnail: thumbnail,
    });
  }
  @Mutation((returns) => Boolean)
  async deletePage(@Args('id') id: string): Promise<boolean> {
    return await this.pageService.deletePage(id);
  }
}
