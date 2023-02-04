-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "messageRoomId" TEXT;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_messageRoomId_fkey" FOREIGN KEY ("messageRoomId") REFERENCES "MessageRoom"("id") ON DELETE SET NULL ON UPDATE CASCADE;
