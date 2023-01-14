import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UtilsService } from '../utils/utils.service';
import { PageResolver } from './page.resolver';
import { PageService } from './page.service';

@Module({
  providers: [PageResolver, PageService, PrismaService, UtilsService],
})
export class PageModule {}
