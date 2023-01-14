import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { generate } from 'shortid';

@Injectable()
export class UtilsService {
  public async singleUpload(upload: any): Promise<string> {
    try {
      const { createReadStream, filename, mimetype } = await upload.file;
      console.log(upload);
      const fileName = `${generate()}-${filename}`;
      console.log(mimetype);
      const fileType = mimetype.split('/')[1];

      const filePath = `${fileName}.${fileType}`;

      const steam = new Promise(async (resolve, reject) =>
        createReadStream()
          .pipe(createWriteStream(`./uploads/${fileName}`))
          .on('finish', () => resolve(fileName))
          .on('error', (error) => reject(error)),
      );
      return fileName;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
