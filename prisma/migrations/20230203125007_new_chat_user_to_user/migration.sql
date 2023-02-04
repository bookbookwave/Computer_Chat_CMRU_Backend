-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_projectId_fkey";

-- AlterTable
ALTER TABLE "Message" ALTER COLUMN "projectId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "MessageRoom" (
    "id" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "MessageRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMessageRoom" (
    "userId" TEXT NOT NULL,
    "messageRoomId" TEXT NOT NULL,

    CONSTRAINT "UserMessageRoom_pkey" PRIMARY KEY ("userId","messageRoomId")
);

-- AddForeignKey
ALTER TABLE "MessageRoom" ADD CONSTRAINT "MessageRoom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMessageRoom" ADD CONSTRAINT "UserMessageRoom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMessageRoom" ADD CONSTRAINT "UserMessageRoom_messageRoomId_fkey" FOREIGN KEY ("messageRoomId") REFERENCES "MessageRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
