'use client';

import { Ticket } from '@/constants/index';
import { TicketChaBoxHeaderActions } from './ticket-chat-box-header-actions';
import { TicketChatBoxHeaderUserDetail } from './ticket-chat-box-header-user-detail';
import { getNameInitials } from '@/lib/get-name-initials';

type TicketChatBoxHeaderProps = {
    ticket: Ticket;
    handleToggleSidebar: () => void;
    open: boolean;
};

export function TicketChatBoxHeader(props: TicketChatBoxHeaderProps) {
    const { userName, id } = props.ticket;
    const { handleToggleSidebar, open } = props;
    const userInitials = getNameInitials(userName);

    return (
        <div className="flex items-center justify-between w-full bg-white border-b px-4 lg:px-7.5 h-[70px]">
            <TicketChatBoxHeaderUserDetail userInitials={userInitials} userName={userName} id={id} />
            <TicketChaBoxHeaderActions handleTicketSidebar={handleToggleSidebar} open={open} />
        </div>
    );
}
