import { Download } from './../@generated';
import {
  DownloadUncheckedCreateInput,
  DownloadUncheckedUpdateInput,
} from './../@generated/index';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DownloadService } from './download.service';
import { UtilsService } from '../utils/utils.service';
import { DownloadCreateInput } from '../@generated';

@Resolver()
export class DownloadResolver {
  constructor(
    private readonly downloadService: DownloadService,
    private readonly utilService: UtilsService,
  ) {}
  @Query((returns) => Download)
  async download(@Args('id') id: string): Promise<Download> {
    return await this.downloadService.getDownload(id);
  }
  @Query((returns) => [Download])
  async downloads(): Promise<Download[]> {
    return await this.downloadService.allDownload();
  }
  @Mutation(() => Download)
  async createDownload(
    @Args('input') input: DownloadUncheckedCreateInput,
  ): Promise<Download> {
    let thumbnail = 'https://picsum.photos/300/300';
    if (input.thumbnail) {
      thumbnail = await this.utilService.singleUpload(input.thumbnail);
    }
    return await this.downloadService.createDownload({
      ...input,
      thumbnail: thumbnail,
    });
  }
  @Mutation(() => Download)
  async updateDownload(
    @Args('input') input: DownloadUncheckedCreateInput,
  ): Promise<Download> {
    let thumbnail = 'https://picsum.photos/300/300';
    if (input.thumbnail) {
      thumbnail = await this.utilService.singleUpload(input.thumbnail);
    }
    return await this.downloadService.updateDownload({
      ...input,
      thumbnail: thumbnail,
    });
  }
  @Mutation(() => Boolean)
  async deleteDownload(@Args('id') id: string): Promise<boolean> {
    return await this.downloadService.deleteDownload(id);
  }
}
