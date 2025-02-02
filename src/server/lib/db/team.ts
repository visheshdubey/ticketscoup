import prisma from './prisma';

export const dbTeamCreate = () => {
    //TODO: Use this in seed.ts
};

export const dbTeamCreateTicketType = ({ title, teamId }: { title: string; teamId: string }) => {
    return prisma.teamTicketType.create({
        data: {
            ticketName: title,
            teamId: parseInt(teamId),
        },
    });
};

export const dbTeamUpdateTicketType = ({ title, ticketTypeId }: { title: string; ticketTypeId: string }) => {
    return prisma.teamTicketType.update({
        where: {
            id: parseInt(ticketTypeId),
        },
        data: {
            ticketName: title,
        },
    });
};

export const dbTeamDeleteTicketType = ({ ticketTypeId }: { ticketTypeId: string }) => {
    return prisma.teamTicketType.delete({
        where: {
            id: parseInt(ticketTypeId),
        },
    });
};

export const dbTeamListTicketTypes = ({ teamId }: { teamId: string }) => {
    return prisma.teamTicketType.findMany({
        where: {
            teamId: parseInt(teamId),
        },
    });
};

export const dbTeamGetTicketTypeById = ({ ticketTypeId }: { ticketTypeId: string }) => {
    return prisma.teamTicketType.findUnique({
        where: {
            id: parseInt(ticketTypeId),
        },
    });
};
