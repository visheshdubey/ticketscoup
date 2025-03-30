import { z } from "zod";
import { Role, TicketStatus, NotificationChannel } from "@prisma/client";

export const RoleSchema = z.nativeEnum(Role);
export const TicketStatusSchema = z.nativeEnum(TicketStatus);
export const NotificationChannelSchema = z.nativeEnum(NotificationChannel);

export const UserSchema = z.object({
  id: z.number().int(),
  email: z.string().email(),
  name: z.string().nullable(),
  phone: z.string().nullable(),
  provider: z.string().nullable(),
  isBlocked: z.boolean(),
  isEmailVerified: z.boolean(),
  fcmToken: z.string().nullable(),
  avatar: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const TeamSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const TeamTicketTypeSchema = z.object({
  id: z.number().int(),
  ticketName: z.string(),
  teamId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const TeamUserProfileSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  teamId: z.number().int(),
  role: RoleSchema,
  notes: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const TicketSchema = z.object({
  id: z.number().int(),
  status: TicketStatusSchema,
  updatedBy: z.string(),
  createdBy: z.string(),
  teamTicketTypeId: z.number().int(),
  userId: z.number().int().nullable(),
  clientId: z.number().int().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const TicketChatSchema = z.object({
  id: z.number().int(),
  text: z.string().nullable(),
  attachment: z.array(z.string()),
  userId: z.number().int(),
  shouldNotifyOnEmail: z.boolean(),
  ticketId: z.number().int().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const NotificationSchema = z.object({
  id: z.number().int(),
  channels: z.array(NotificationChannelSchema).default([NotificationChannel.PUSH]),
  content: z.string().nullable(),
  image: z.string().nullable(),
  sender: z.string().nullable(),
  audience: z.array(z.string()),
  pushAction: z.string().nullable(),
  eventType: z.string(),
  teamId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const UserNotificationSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  notificationId: z.number().int(),
});
