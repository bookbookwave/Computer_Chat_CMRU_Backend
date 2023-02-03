import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LogLoginResolver } from './log-login.resolver';
import { LogLoginService } from './log-login.service';

@Module({
  providers: [LogLoginResolver, LogLoginService, PrismaService],
})
export class LogLoginModule {}
