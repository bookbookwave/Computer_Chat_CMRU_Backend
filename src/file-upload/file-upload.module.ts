import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FileUploadService } from './file-upload.service';
import { FileUploadResolver } from './file-upload.resolver';

@Module({
  providers: [FileUploadService, PrismaService, FileUploadResolver],
})
export class FileUploadModule {}
