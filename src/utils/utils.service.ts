import { Injectable } from '@nestjs/common';
import { createReadStream, createWriteStream, unlink } from 'fs';
import { generate } from 'shortid';

@Injectable()
export class UtilsService {
  public async singleUpload(upload: any): Promise<string> {
    try {
      const { mimetype, originalname, path } = await upload;
      const fileName = `${generate()}-${originalname}`;
      const fileType = mimetype.split('/')[1];

      const filePath = `${fileName}.${fileType}`;

      const steam = new Promise(async (resolve, reject) =>
        createReadStream(path)
          .pipe(createWriteStream(`./uploads/images/${fileName}`))
          .on('finish', () => {
            resolve(fileName);
            // TODO: This remove temp file
            unlink(path, (error) => console.log(error));
          })
          .on('error', (error) => reject(error)),
      );
      return fileName;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  public async fileUpload(upload: any): Promise<string> {
    try {
      const { mimetype, originalname, path } = await upload;
      const fileName = `${generate()}-${originalname}`;
      const fileType = mimetype.split('/')[1];

      const filePath = `${fileName}.${fileType}`;

      const steam = new Promise(async (resolve, reject) =>
        createReadStream(path)
          .pipe(createWriteStream(`./uploads/files/${fileName}`))
          .on('finish', () => {
            resolve(fileName);
            // TODO: This remove temp file
            unlink(path, (error) => console.log(error));
          })
          .on('error', (error) => reject(error)),
      );
      return fileName;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
