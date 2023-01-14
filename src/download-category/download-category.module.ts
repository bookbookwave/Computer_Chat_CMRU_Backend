import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DownloadCategoryResolver } from './download-category.resolver';
import { DownloadCategoryService } from './download-category.service';

@Module({
  providers: [DownloadCategoryResolver, DownloadCategoryService, PrismaService],
})
export class DownloadCategoryModule {}
