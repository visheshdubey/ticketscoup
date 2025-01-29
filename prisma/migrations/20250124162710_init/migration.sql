-- CreateEnum
CREATE TYPE "Role" AS ENUM ('CLIENT', 'STAFF', 'MANAGER', 'ADMIN', 'DEVELOPER');

-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('UNASSIGNED', 'TODO', 'IN_PROGRESS', 'HOLD', 'DONE', 'CANCELLED');

-- CreateEnum
CREATE TYPE "NotificationChannel" AS ENUM ('EMAIL', 'PUSH');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "password" TEXT,
    "isBlocked" BOOLEAN NOT NULL DEFAULT false,
    "isEmailVerified" BOOLEAN NOT NULL DEFAULT false,
    "emailVerificationCode" TEXT,
    "forgotPasswordCode" TEXT,
    "name" TEXT NOT NULL,
    "fcmToken" TEXT,
    "avatar" TEXT,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganizationTicketType" (
    "id" SERIAL NOT NULL,
    "ticketName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "organizationId" INTEGER NOT NULL,

    CONSTRAINT "OrganizationTicketType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganizationUserProfile" (
    "id" SERIAL NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "organizationId" INTEGER NOT NULL,

    CONSTRAINT "OrganizationUserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "status" "TicketStatus" NOT NULL DEFAULT 'UNASSIGNED',
    "subscribers" TEXT[],
    "updatedBy" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "organizationTicketTypeId" INTEGER NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TicketChat" (
    "id" SERIAL NOT NULL,
    "text" TEXT,
    "attachment" TEXT[],
    "updatedBy" TEXT NOT NULL,
    "shouldNotifyOnEmail" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ticketId" INTEGER,

    CONSTRAINT "TicketChat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "channels" "NotificationChannel"[] DEFAULT ARRAY['PUSH']::"NotificationChannel"[],
    "content" TEXT,
    "image" TEXT,
    "audience" TEXT[],
    "eventType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "organizationId" INTEGER NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "OrganizationTicketType" ADD CONSTRAINT "OrganizationTicketType_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationUserProfile" ADD CONSTRAINT "OrganizationUserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationUserProfile" ADD CONSTRAINT "OrganizationUserProfile_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_organizationTicketTypeId_fkey" FOREIGN KEY ("organizationTicketTypeId") REFERENCES "OrganizationTicketType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TicketChat" ADD CONSTRAINT "TicketChat_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
