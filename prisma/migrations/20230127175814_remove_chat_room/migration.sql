/*
  Warnings:

  - You are about to drop the column `roomId` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the `MessageRoom` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `projectId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_roomId_fkey";

-- DropForeignKey
ALTER TABLE "MessageRoom" DROP CONSTRAINT "MessageRoom_projectId_fkey";

-- DropForeignKey
ALTER TABLE "MessageRoom" DROP CONSTRAINT "MessageRoom_userId_fkey";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "roomId",
ADD COLUMN     "projectId" TEXT NOT NULL;

-- DropTable
DROP TABLE "MessageRoom";

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
