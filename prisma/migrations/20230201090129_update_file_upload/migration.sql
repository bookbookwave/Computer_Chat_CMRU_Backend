/*
  Warnings:

  - Added the required column `statusId` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Download" ALTER COLUMN "thumbnail" SET DEFAULT 'https://picsum.photos/300/300';

-- AlterTable
ALTER TABLE "File" ADD COLUMN     "statusId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Page" ALTER COLUMN "thumbnail" SET DEFAULT 'https://picsum.photos/480/320';

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "thumbnail" SET DEFAULT 'https://picsum.photos/480/320';

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "avatar" SET DEFAULT 'https://picsum.photos/300/300';

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "ProjectStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
