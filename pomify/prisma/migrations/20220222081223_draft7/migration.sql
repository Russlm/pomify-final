/*
  Warnings:

  - You are about to drop the column `description` on the `Games` table. All the data in the column will be lost.
  - Added the required column `description` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Games" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "Tasks" ADD COLUMN     "description" TEXT NOT NULL;
