import prisma from './prisma';

export const dbTicketChatCreate = ({
    text,
    attachment,
    userId,
    shouldNotifyOnEmail,
    ticketId,
}: {
    text: string | null;
    attachment: string[];
    userId: number;
    shouldNotifyOnEmail: boolean;
    ticketId: number;
}) => {
    return prisma.ticketChat.create({
        data: {
            text,
            attachment,
            userId,
            shouldNotifyOnEmail,
            ticketId,
        },
    });
};

export const dbTicketChatUpdate = ({
    id,
    text,
    attachment,
    shouldNotifyOnEmail,
}: {
    id: number;
    text?: string | null;
    attachment?: string[];
    shouldNotifyOnEmail?: boolean;
}) => {
    return prisma.ticketChat.update({
        where: { id },
        data: {
            text,
            attachment,
            shouldNotifyOnEmail,
        },
    });
};

export const dbTicketChatDelete = ({ id }: { id: number }) => {
    return prisma.ticketChat.delete({
        where: { id },
    });
};

export const dbTicketChatGetThreadByTicketId = ({ ticketId }: { ticketId: number }) => {
    return prisma.ticketChat.findMany({
        where: { ticketId },
        orderBy: { createdAt: 'desc' },
    });
};
