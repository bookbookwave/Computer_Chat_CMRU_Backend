import { Injectable } from '@nestjs/common';
import { Banner, BannerCreateInput } from '../@generated';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BannerService {
  constructor(private readonly db: PrismaService) {}
  async getBanner(id: string): Promise<Banner> {
    try {
      return await this.db.banner.findFirst({ where: { id: id } });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async allBanners(): Promise<Banner[]> {
    try {
      return await this.db.banner.findMany();
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async createBanner(
    input: Omit<BannerCreateInput, 'image'> & { image: string },
  ): Promise<Banner> {
    try {
      return await this.db.banner.create({
        data: {
          title: input.title,
          image: input.image,
          link: input.link,
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async updateBanner(
    input: Omit<BannerCreateInput, 'image'> & { image: string },
  ): Promise<Banner> {
    try {
      return await this.db.banner.update({
        where: { id: input.id },
        data: { title: input.title, image: input.image, link: input.link },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async deleteBanner(id: string): Promise<boolean> {
    try {
      const data = await this.db.banner.delete({ where: { id: id } });
      if (!data) {
        return true;
      }
      return false;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
