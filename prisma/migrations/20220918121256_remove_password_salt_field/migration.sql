/*
  Warnings:

  - You are about to drop the column `passwordSalt` on the `User` table. All the data in the column will be lost.
  - Made the column `userId` on table `Event` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_userId_fkey";

-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "passwordSalt";

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
