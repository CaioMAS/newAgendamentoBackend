/*
  Warnings:

  - The `services` column on the `professional` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "professional" DROP COLUMN "services",
ADD COLUMN     "services" TEXT[] DEFAULT ARRAY[]::TEXT[];
