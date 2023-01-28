import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProjectResolver } from './project.resolver';
import { ProjectService } from './project.service';

@Module({
  providers: [ProjectResolver, ProjectService, PrismaService],
})
export class ProjectModule {}
