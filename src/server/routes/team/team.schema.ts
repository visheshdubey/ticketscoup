import { z } from 'zod';

export const CreateTicketTypeReqSchema = z.object({
    title: z.string(),
    teamId: z.string(),
});

export const CreateTicketTypeResSchema = z.object({
    id: z.number(),
    ticketName: z.string(),
    teamId: z.number(),
});

export const UpdateTicketTypeReqSchema = z.object({
    title: z.string(),
    ticketTypeId: z.string(),
});

export const UpdateTicketTypeResSchema = z.object({
    id: z.number(),
    ticketName: z.string(),
    teamId: z.number(),
});

export const DeleteTicketTypeReqSchema = z.object({
    ticketTypeId: z.string(),
});

export const DeleteTicketTypeResSchema = z.object({
    id: z.number(),
    ticketName: z.string(),
    teamId: z.number(),
});

export const ListTicketTypesReqSchema = z.object({
    teamId: z.string(),
});

export const ListTicketTypesResSchema = z.array(
    z.object({
        id: z.number(),
        ticketName: z.string(),
        teamId: z.number(),
    })
);

export const GetTicketByIdReqSchema = z.object({
    ticketTypeId: z.string(),
});

export const GetTicketByIdResSchema = z.object({
    id: z.number(),
    ticketName: z.string(),
    teamId: z.number(),
});

export const GetTeamByIdReqSchema = z.object({
    ticketTypeId: z.string(),
});

export const GetTeamByIdResSchema = z.object({
    id: z.number(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    isActive: z.boolean(),
});
