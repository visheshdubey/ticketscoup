import { TicketStatus } from '@prisma/client';
import prisma from './prisma';

export type DBTicketCreateFn = ({
    status,
    assignedTo,
    subscribers,
    updatedBy,
    createdBy,
    teamTicketTypeId,
}: {
    status: TicketStatus;
    assignedTo: number | null;
    subscribers: string[];
    updatedBy: string;
    createdBy: string;
    teamTicketTypeId: number;
}) => Promise<any>;

export type DBTicketUpdateFn = ({
    ticketId,
    status,
    assignedTo,
    subscribers,
    chat,
    updatedBy,
    teamTicketTypeId,
}: {
    ticketId: string;
    status: TicketStatus;
    assignedTo: number | null;
    subscribers: string[];
    chat: any[];
    updatedBy: string;
    teamTicketTypeId: number;
}) => Promise<any>;

export type DBTicketDeleteFn = ({ ticketId }: { ticketId: string }) => Promise<any>;

export type DBTicketListFn = ({ teamTicketTypeId }: { teamTicketTypeId: string }) => Promise<any>;

export type DBTicketGetByIdFn = ({ ticketId }: { ticketId: string }) => Promise<any>;

export const dbTicketCreate: DBTicketCreateFn = ({
    status,
    assignedTo,
    subscribers,
    updatedBy,
    createdBy,
    teamTicketTypeId,
}) => {
    return prisma.ticket.create({
        data: {
            status,
            assignedTo: assignedTo ? { connect: { id: assignedTo } } : undefined,
            subscribers,
            type: { connect: { id: teamTicketTypeId } },
            updatedBy,
            createdBy,
        },
    });
};

export const dbTicketUpdate: DBTicketUpdateFn = ({
    ticketId,
    status,
    assignedTo,
    subscribers,
    updatedBy,
    teamTicketTypeId,
}) => {
    return prisma.ticket.update({
        where: {
            id: parseInt(ticketId),
        },
        data: {
            status,
            assignedTo: assignedTo ? { connect: { id: assignedTo } } : undefined,
            subscribers,
            type: { connect: { id: teamTicketTypeId } },
            updatedBy,
        },
    });
};

export const dbTicketDelete: DBTicketDeleteFn = ({ ticketId }) => {
    return prisma.ticket.delete({
        where: {
            id: parseInt(ticketId),
        },
    });
};

export const dbTicketList: DBTicketListFn = ({ teamTicketTypeId }) => {
    return prisma.ticket.findMany({
        where: {
            teamTicketTypeId: parseInt(teamTicketTypeId),
        },
    });
};

export const dbTicketGetById: DBTicketGetByIdFn = ({ ticketId }) => {
    return prisma.ticket.findUnique({
        where: {
            id: parseInt(ticketId),
        },
    });
};
