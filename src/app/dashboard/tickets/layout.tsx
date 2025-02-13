'use client';
import TicketChatLayout from '@/features/ticket-chat/comps/layouts/ticket-chat-layout';

type Props = {
    children: React.ReactNode;
};

export default function TicketsLayout({ children }: Props) {
    return <TicketChatLayout>{children}</TicketChatLayout>;
}
