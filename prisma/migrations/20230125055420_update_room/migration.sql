/*
  Warnings:

  - Added the required column `userId` to the `MessageRoom` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MessageRoom" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "MessageRoom" ADD CONSTRAINT "MessageRoom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
