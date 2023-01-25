import { UtilsService } from './utils/utils.service';
import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly utilsService: UtilsService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('upload/image')
  @UseInterceptors(FileInterceptor('image'))
  async createNewImage(@UploadedFile() file) {
    return await this.utilsService.singleUpload(file);
  }
  @Post('upload/file')
  @UseInterceptors(FileInterceptor('file'))
  async createNewFile(@UploadedFile() file) {
    return await this.utilsService.fileUpload(file);
  }
}
