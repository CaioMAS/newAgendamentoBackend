-- DropForeignKey
ALTER TABLE "schedule" DROP CONSTRAINT "schedule_professionalId_fkey";

-- AlterTable
ALTER TABLE "schedule" ALTER COLUMN "professionalId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "professional"("id") ON DELETE SET NULL ON UPDATE CASCADE;
