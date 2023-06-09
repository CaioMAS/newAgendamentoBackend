/*
  Warnings:

  - Made the column `password` on table `admin` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "admin" ALTER COLUMN "password" SET NOT NULL;
