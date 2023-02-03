-- CreateTable
CREATE TABLE "loginTime" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "loginTime_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "loginTime" ADD CONSTRAINT "loginTime_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
