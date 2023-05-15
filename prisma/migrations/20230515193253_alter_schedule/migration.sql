/*
  Warnings:

  - You are about to drop the column `day` on the `schedule` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "schedule" DROP COLUMN "day",
ADD COLUMN     "date" TIMESTAMP(3);
