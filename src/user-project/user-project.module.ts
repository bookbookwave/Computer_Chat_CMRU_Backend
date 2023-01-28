import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserProjectResolver } from './user-project.resolver';
import { UserProjectService } from './user-project.service';

@Module({
  providers: [UserProjectResolver, UserProjectService, PrismaService],
})
export class UserProjectModule {}
