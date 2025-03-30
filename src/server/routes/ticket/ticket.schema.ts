import { TicketStatus } from '@prisma/client';
import { z } from 'zod';
import { TicketSchema } from '@/server/lib/schemas';

export const CreateTicketReqSchema = z.object({
    status: z.nativeEnum(TicketStatus),
    assignedTo: z.number().nullable(),
    teamTicketTypeId: z.number(),
    teamId: z.number(),
    clientId: z.number().nullable(),
    updatedBy: z.string(),
    createdBy: z.string(),
});

export const CreateTicketResSchema = TicketSchema;

export const UpdateTicketReqSchema = z.object({
    status: z.nativeEnum(TicketStatus).optional(),
    assignedTo: z.number().nullable().optional(),
    clientId: z.number().nullable().optional(),
    updatedBy: z.string().optional(),
    teamTicketTypeId: z.number().optional(),
    teamId: z.number().optional(),
});

export const UpdateTicketResSchema = TicketSchema;

export const DeleteTicketResSchema = TicketSchema;

export const ListTicketsResSchema = z.array(TicketSchema);

export const GetTicketByIdResSchema = TicketSchema;
