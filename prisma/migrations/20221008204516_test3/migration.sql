/*
  Warnings:

  - You are about to drop the column `UserPreferencesId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userPreferencesId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_UserPreferencesId_fkey";

-- DropIndex
DROP INDEX "User_UserPreferencesId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "UserPreferencesId",
ADD COLUMN     "userPreferencesId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_userPreferencesId_key" ON "User"("userPreferencesId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userPreferencesId_fkey" FOREIGN KEY ("userPreferencesId") REFERENCES "UserPreferences"("id") ON DELETE SET NULL ON UPDATE CASCADE;
