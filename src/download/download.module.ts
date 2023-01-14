import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UtilsService } from '../utils/utils.service';
import { DownloadResolver } from './download.resolver';
import { DownloadService } from './download.service';

@Module({
  providers: [DownloadResolver, DownloadService, PrismaService, UtilsService],
})
export class DownloadModule {}
