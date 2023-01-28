/*
  Warnings:

  - You are about to drop the column `roomID` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `statusID` on the `Project` table. All the data in the column will be lost.
  - Added the required column `roomId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_roomID_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_statusID_fkey";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "roomID",
ADD COLUMN     "roomId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "statusID",
ADD COLUMN     "statusId" TEXT NOT NULL,
ADD COLUMN     "typeId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ProjectType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ProjectType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ProjectType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "ProjectStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "MessageRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
