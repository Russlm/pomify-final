/*
  Warnings:

  - Changed the type of `date_created` on the `Tasks` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `date_finished` on the `Tasks` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Games" ALTER COLUMN "date_played" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "Tasks" DROP COLUMN "date_created",
ADD COLUMN     "date_created" DATE NOT NULL,
DROP COLUMN "date_finished",
ADD COLUMN     "date_finished" DATE NOT NULL;
