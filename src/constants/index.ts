export type Ticket = {
    userName: string;
    id: string;
    status?: string;
    type?: string;
    unReadCount?: number;
};

export type TicketChat = {
    userName: string;
    id: string;
    isMine: boolean;
    description: string;
    timestamp: string;
};

export type Segment = {
    heading: string;
};
