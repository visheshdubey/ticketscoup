import { TicketStatus } from '@prisma/client';
import prisma from './prisma';

export type DBTicketCreateFn = ({
    status,
    assignedTo,
    clientId,
    updatedBy,
    createdBy,
    teamTicketTypeId,
    teamId,
}: {
    status: TicketStatus;
    assignedTo: number | null;
    clientId: number | null;
    updatedBy: string;
    createdBy: string;
    teamTicketTypeId: number;
    teamId: number;
}) => Promise<any>;

export type DBTicketUpdateFn = ({
    ticketId,
    status,
    assignedTo,
    clientId,
    updatedBy,
    teamTicketTypeId,
}: {
    ticketId: string;
    status?: TicketStatus;
    assignedTo?: number;
    clientId?: number;
    updatedBy?: string;
    teamTicketTypeId?: number;
}) => Promise<any>;

export type DBTicketDeleteFn = ({ ticketId }: { ticketId: string }) => Promise<any>;

export type DBTeamTicketListFn = ({ teamId }: { teamId: string }) => Promise<any>;

export type DBTicketGetByIdFn = ({ ticketId }: { ticketId: string }) => Promise<any>;

export const dbTicketCreate: DBTicketCreateFn = async ({
    status,
    assignedTo,
    clientId,
    updatedBy,
    createdBy,
    teamTicketTypeId,
    teamId,
}) => {
    return prisma.ticket.create({
        data: {
            status,
            assignedTo: assignedTo ? { connect: { id: assignedTo } } : undefined,
            client: clientId ? { connect: { id: clientId } } : undefined,
            type: { connect: { id: teamTicketTypeId } },
            team: { connect: { id: teamId } },
            updatedBy,
            createdBy,
        },
    });
};

export const dbTicketUpdate: DBTicketUpdateFn = ({
    ticketId,
    status,
    assignedTo,
    clientId,
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
            client: clientId ? { connect: { id: clientId } } : undefined,
            type: teamTicketTypeId ? { connect: { id: teamTicketTypeId } } : undefined,
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

export const dbTeamTicketList: DBTeamTicketListFn = ({ teamId }) => {
    return prisma.ticket.findMany({
        where: {
            team: { id: parseInt(teamId) },
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
