/*
  Warnings:

  - You are about to drop the column `professionalId` on the `schedule` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "schedule" DROP CONSTRAINT "schedule_professionalId_fkey";

-- AlterTable
ALTER TABLE "schedule" DROP COLUMN "professionalId",
ADD COLUMN     "professional_id" TEXT;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "professional"("id") ON DELETE SET NULL ON UPDATE CASCADE;
