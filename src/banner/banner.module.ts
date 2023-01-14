import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UtilsService } from '../utils/utils.service';
import { BannerResolver } from './banner.resolver';
import { BannerService } from './banner.service';

@Module({
  providers: [BannerResolver, BannerService, PrismaService, UtilsService],
})
export class BannerModule {}
