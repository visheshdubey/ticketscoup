import { TicketStatus } from '@prisma/client';
import { z } from 'zod';
import { TicketSchema } from '@/server/lib/schemas';

export const CreateTicketReqSchema = z.object({
    status: z.nativeEnum(TicketStatus),
    assignedTo: z.number().nullable(),
    teamTicketTypeId: z.number(),
});

export const CreateTicketResSchema = TicketSchema;

export const UpdateTicketReqSchema = z.object({
    ticketId: z.string(),
    status: z.nativeEnum(TicketStatus),
    assignedTo: z.number().nullable(),
    subscribers: z.array(z.string()),
    chat: z.array(z.any()),
    updatedBy: z.string(),
    teamTicketTypeId: z.number(),
});

export const UpdateTicketResSchema = TicketSchema;

export const DeleteTicketResSchema = TicketSchema;

export const ListTicketsResSchema = z.array(TicketSchema);

export const GetTicketByIdResSchema = TicketSchema;
