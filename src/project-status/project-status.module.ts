import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { ProjectStatusService } from './project-status.service';
import { ProjectStatusResolver } from './project-status.resolver';

@Module({
  providers: [ProjectStatusService, ProjectStatusResolver, PrismaService],
})
export class ProjectStatusModule {}
