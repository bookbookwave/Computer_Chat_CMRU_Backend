import { Banner, BannerCreateInput } from './../@generated';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BannerService } from './banner.service';
import { UtilsService } from '../utils/utils.service';

@Resolver()
export class BannerResolver {
  constructor(
    private readonly bannerService: BannerService,
    private readonly utilService: UtilsService,
  ) {}

  @Query((returns) => Banner)
  async banner(@Args('id') id: string): Promise<Banner> {
    return await this.bannerService.getBanner(id);
  }

  @Query((returns) => [Banner])
  async banners(): Promise<Banner[]> {
    return await this.bannerService.allBanners();
  }

  @Mutation((returns) => Banner)
  async createBanner(@Args('input') input: BannerCreateInput): Promise<Banner> {
    console.log('input :>> ', input);
    let image = 'https://picsum.photos/1280/320';
    if (input.image) {
      image = input.image;
      // image = await this.utilService.singleUpload(input.image);
    }
    return await this.bannerService.createBanner({ ...input, image: image });
  }

  @Mutation((returns) => Banner)
  async updateBanner(@Args('input') input: BannerCreateInput): Promise<Banner> {
    let image = 'https://picsum.photos/1280/320';
    if (input.image) {
      image = input.image;
      // image = await this.utilService.singleUpload(input.image);
    }
    return await this.bannerService.updateBanner({ ...input, image: image });
  }

  @Mutation((returns) => Boolean)
  async deleteBanner(@Args('id') id: string): Promise<boolean> {
    return await this.bannerService.deleteBanner(id);
  }
}
