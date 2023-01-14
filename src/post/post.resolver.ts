import { Post, PostUncheckedCreateInput } from './../@generated';
import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';
import { UtilsService } from '../utils/utils.service';

@Resolver()
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly utilService: UtilsService,
  ) {}

  @Query((returns) => Post)
  async post(@Args('id') id: string): Promise<Post> {
    return await this.postService.post(id);
  }
  @Query((returns) => [Post])
  async posts(): Promise<Post[]> {
    return await this.postService.getAll();
  }
  @Mutation((returns) => Post)
  async createPost(
    @Args('input') input: PostUncheckedCreateInput,
  ): Promise<Post> {
    let thumbnail = 'https://via.placeholder.com/150x150';
    if (input.thumbnail) {
      thumbnail = await this.utilService.singleUpload(input.thumbnail);
    }
    return await this.postService.createPost({
      ...input,
      thumbnail: thumbnail,
    });
  }
  @Mutation((returns) => Post)
  async updatePost(
    @Args('input') input: PostUncheckedCreateInput,
  ): Promise<Post> {
    let thumbnail = 'https://via.placeholder.com/150x150';
    if (input.thumbnail) {
      thumbnail = await this.utilService.singleUpload(input.thumbnail);
    }
    return await this.postService.updatePost({
      ...input,
      thumbnail: thumbnail,
    });
  }
  @Mutation((returns) => Boolean)
  async deletePost(@Args('id') id: string): Promise<boolean> {
    return await this.postService.deletePost(id);
  }
}
