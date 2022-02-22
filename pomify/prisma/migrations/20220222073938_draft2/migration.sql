/*
  Warnings:

  - Added the required column `completed` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_created` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_finished` to the `Tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `est_pomos` to the `Tasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tasks" ADD COLUMN     "completed" BOOLEAN NOT NULL,
ADD COLUMN     "date_created" TEXT NOT NULL,
ADD COLUMN     "date_finished" TEXT NOT NULL,
ADD COLUMN     "est_pomos" INTEGER NOT NULL;
