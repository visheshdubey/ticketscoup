import { z } from 'zod';
import { TeamSchema, TeamTicketTypeSchema } from '@/server/lib/schemas';

export const CreateTicketTypeReqSchema = z.object({
    title: z.string(),
    teamId: z.string(),
});

export const CreateTicketTypeResSchema = TeamTicketTypeSchema;

export const UpdateTicketTypeReqSchema = z.object({
    title: z.string(),
    ticketTypeId: z.string(),
});

export const UpdateTicketTypeResSchema = TeamTicketTypeSchema;

export const DeleteTicketTypeReqSchema = z.object({
    ticketTypeId: z.string(),
});

export const DeleteTicketTypeResSchema = TeamTicketTypeSchema;

export const ListTicketTypesReqSchema = z.object({
    teamId: z.string(),
});

export const ListTicketTypesResSchema = z.array(TeamTicketTypeSchema);

export const GetTicketByIdReqSchema = z.object({
    ticketTypeId: z.string(),
});

export const GetTicketByIdResSchema = TeamTicketTypeSchema;

export const GetTeamByIdReqSchema = z.object({
    ticketTypeId: z.string(),
});

export const GetTeamByIdResSchema = TeamSchema;
