/*
  Warnings:

  - You are about to drop the column `organizationId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `organizationTicketTypeId` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the `Organization` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrganizationTicketType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrganizationUserProfile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `teamId` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamTicketTypeId` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "OrganizationTicketType" DROP CONSTRAINT "OrganizationTicketType_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "OrganizationUserProfile" DROP CONSTRAINT "OrganizationUserProfile_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "OrganizationUserProfile" DROP CONSTRAINT "OrganizationUserProfile_userId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_organizationTicketTypeId_fkey";

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "organizationId",
ADD COLUMN     "teamId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "organizationTicketTypeId",
ADD COLUMN     "teamTicketTypeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Organization";

-- DropTable
DROP TABLE "OrganizationTicketType";

-- DropTable
DROP TABLE "OrganizationUserProfile";

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamTicketType" (
    "id" SERIAL NOT NULL,
    "ticketName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "TeamTicketType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamUserProfile" (
    "id" SERIAL NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "TeamUserProfile_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TeamTicketType" ADD CONSTRAINT "TeamTicketType_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamUserProfile" ADD CONSTRAINT "TeamUserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamUserProfile" ADD CONSTRAINT "TeamUserProfile_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_teamTicketTypeId_fkey" FOREIGN KEY ("teamTicketTypeId") REFERENCES "TeamTicketType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
