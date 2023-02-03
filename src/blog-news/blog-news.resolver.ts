import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { blogNews, blogNewsUncheckedCreateInput } from 'src/@generated';
import { BlogNewsService } from './blog-news.service';

@Resolver()
export class BlogNewsResolver {
  constructor(public readonly blogNewsService: BlogNewsService) {}

  @Query((returns) => blogNews)
  async findBlogNewsById(@Args('id') id: string): Promise<blogNews> {
    return await this.blogNewsService.findBlogNewsById(id);
  }
  @Query((returns) => [blogNews])
  async blogNews(): Promise<blogNews[]> {
    return await this.blogNewsService.BlogNews();
  }
  @Mutation((returns) => blogNews)
  async createBlogNews(
    @Args('input') input: blogNewsUncheckedCreateInput,
  ): Promise<blogNews> {
    return await this.blogNewsService.createBlogNews(input);
  }
  @Mutation((returns) => blogNews)
  async updateBlogNews(
    @Args('input') input: blogNewsUncheckedCreateInput,
  ): Promise<blogNews> {
    return await this.blogNewsService.updateBlogNews(input);
  }
  @Mutation((returns) => Boolean)
  async deleteBlogNews(@Args('id') id: string): Promise<boolean> {
    return await this.blogNewsService.deleteBlogNews(id);
  }
}
