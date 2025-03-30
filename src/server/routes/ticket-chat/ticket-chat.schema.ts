import { z } from 'zod';
import { TicketChatSchema } from '@/server/lib/schemas';

export const CreateTicketChatReqSchema = z.object({
    text: z.string().nullable(),
    attachment: z.array(z.string()),
    userId: z.number().int(),
    shouldNotifyOnEmail: z.boolean(),
    ticketId: z.number().int(),
});

export const CreateTicketChatResSchema = TicketChatSchema;

export const UpdateTicketChatReqSchema = z.object({
    text: z.string().nullable().optional(),
    attachment: z.array(z.string()).optional(),
    shouldNotifyOnEmail: z.boolean().optional(),
});

export const UpdateTicketChatResSchema = TicketChatSchema;

export const DeleteTicketChatResSchema = TicketChatSchema;

export const GetTicketChatThreadResSchema = z.array(TicketChatSchema);
