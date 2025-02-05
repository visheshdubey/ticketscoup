import { TicketStatus } from '@prisma/client';
import { z } from 'zod';

export const CreateTicketReqSchema = z.object({
    status: z.nativeEnum(TicketStatus),
    assignedTo: z.number().nullable(),
    subscribers: z.array(z.string()),
    chat: z.array(z.any()),
    type: z.string(),
    updatedBy: z.string(),
    createdBy: z.string(),
    teamTicketTypeId: z.number(),
    userId: z.number().nullable(),
});

export const CreateTicketResSchema = z.object({
    id: z.number(),
    status: z.nativeEnum(TicketStatus),
    assignedTo: z.number().nullable(),
    subscribers: z.array(z.string()),
    chat: z.array(z.any()),
    type: z.string(),
    updatedBy: z.string(),
    createdBy: z.string(),
    teamTicketTypeId: z.number(),
    userId: z.number().nullable(),
});

export const UpdateTicketReqSchema = z.object({
    ticketId: z.string(),
    status: z.nativeEnum(TicketStatus),
    assignedTo: z.number().nullable(),
    subscribers: z.array(z.string()),
    chat: z.array(z.any()),
    updatedBy: z.string(),
    teamTicketTypeId: z.number(),
});

export const UpdateTicketResSchema = z.object({
    id: z.number(),
    status: z.nativeEnum(TicketStatus),
    assignedTo: z.number().nullable(),
    subscribers: z.array(z.string()),
    chat: z.array(z.any()),
    type: z.string(),
    updatedBy: z.string(),
    createdBy: z.string(),
    teamTicketTypeId: z.number(),
    userId: z.number().nullable(),
});

export const DeleteTicketResSchema = z.object({
    id: z.number(),
    status: z.nativeEnum(TicketStatus),
    assignedTo: z.number().nullable(),
    subscribers: z.array(z.string()),
    chat: z.array(z.any()),
    type: z.string(),
    updatedBy: z.string(),
    createdBy: z.string(),
    teamTicketTypeId: z.number(),
    userId: z.number().nullable(),
});

export const ListTicketsResSchema = z.array(
    z.object({
        id: z.number(),
        status: z.nativeEnum(TicketStatus),
        assignedTo: z.number().nullable(),
        subscribers: z.array(z.string()),
        chat: z.array(z.any()),
        type: z.string(),
        updatedBy: z.string(),
        createdBy: z.string(),
        teamTicketTypeId: z.number(),
        userId: z.number().nullable(),
    })
);

export const GetTicketByIdResSchema = z.object({
    id: z.number(),
    status: z.nativeEnum(TicketStatus),
    assignedTo: z.number().nullable(),
    subscribers: z.array(z.string()),
    chat: z.array(z.any()),
    type: z.string(),
    updatedBy: z.string(),
    createdBy: z.string(),
    teamTicketTypeId: z.number(),
    userId: z.number().nullable(),
});
