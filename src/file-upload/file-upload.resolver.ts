import { FileUploadService } from './file-upload.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { File, FileUncheckedCreateInput } from 'src/@generated';

@Resolver()
export class FileUploadResolver {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Query((returns) => File)
  async findFile(@Args('id') id: string): Promise<File> {
    return this.fileUploadService.findFile(id);
  }
  @Query((returns) => [File])
  async getFiles(): Promise<File[]> {
    return this.fileUploadService.getFiles();
  }
  @Query((returns) => [File])
  async getFilesById(@Args('id') id: string): Promise<File[]> {
    return this.fileUploadService.getFilesById(id);
  }
  @Query((returns) => [File])
  async getFilesByRoom(@Args('id') id: string): Promise<File[]> {
    return this.fileUploadService.getFilesByRoom(id);
  }
  @Mutation((returns) => File)
  async createFile(
    @Args('input') input: FileUncheckedCreateInput,
  ): Promise<File> {
    return this.fileUploadService.createFile(input);
  }
  @Mutation((returns) => File)
  async updateFile(
    @Args('input') input: FileUncheckedCreateInput,
  ): Promise<File> {
    return this.fileUploadService.updateFile(input);
  }
  @Mutation((returns) => Boolean)
  async deleteFile(@Args('id') id: string): Promise<boolean> {
    return this.fileUploadService.deleteFile(id);
  }
}
