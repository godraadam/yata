/*
  Warnings:

  - You are about to drop the column `end_date` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `start_date` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `color_code` on the `Label` table. All the data in the column will be lost.
  - You are about to drop the column `created_datetime` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `created_datetime` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `due_date` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colorCode` to the `Label` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "end_date",
DROP COLUMN "start_date",
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Label" DROP COLUMN "color_code",
ADD COLUMN     "colorCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Note" DROP COLUMN "created_datetime",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "created_datetime",
DROP COLUMN "due_date",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "dueDate" TIMESTAMP(3);
