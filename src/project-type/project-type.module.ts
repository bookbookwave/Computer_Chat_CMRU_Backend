import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProjectTypeResolver } from './project-type.resolver';
import { ProjectTypeService } from './project-type.service';

@Module({
  providers: [ProjectTypeResolver, ProjectTypeService, PrismaService],
})
export class ProjectTypeModule {}
