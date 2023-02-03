import { Module } from '@nestjs/common';
import { BlogNewsService } from './blog-news.service';
import { BlogNewsResolver } from './blog-news.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [BlogNewsService, BlogNewsResolver, PrismaService],
})
export class BlogNewsModule {}
