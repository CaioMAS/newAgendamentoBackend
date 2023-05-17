/*
  Warnings:

  - You are about to drop the column `services` on the `professional` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "professional" DROP COLUMN "services";

-- CreateTable
CREATE TABLE "services" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "professionalId" TEXT NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "professional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
