export type Ticket = {
    userName: string;
    id: string;
    status: string;
    type: string;
    unReadCount: number;
};

export type TicketData = {
    userName: string;
    id: string;
    status: string;
    type: string;
};

export type TicketChatData = {
    userName: string;
    id: string;
    isMine: boolean;
    description: string;
    timestamp: string;
};
