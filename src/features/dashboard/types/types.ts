import type { ComponentType } from 'react';

export type CardInfo = {
    title: string;
    value: string;
    growth: string;
};

export interface WidgetCardProps {
    info: CardInfo;
}

export type LogoType = string | ComponentType<{ size?: number }>;

export interface Invoice {
    id: string;
    client: string;
    type: string;
    status: string;
    lastUpdated: string;
    assginedTo: string;
}

export interface Staff {
    id: string;
    name: string;
    email: string;
    totalTickets: string;
    activeTickets: string;
    closedTickets: string;
}
