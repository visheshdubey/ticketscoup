'use client';

import { Ticket } from '@/constants/index';
import { getNameInitials } from '@/lib/get-name-initials';
import { TicketChatBoxHeaderUserDetail } from './ticket-chat-box-header-user-detail';
import { TicketChaBoxHeaderActions } from './ticket-chat-box-header-actions';

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
        <div className="w-full bg-white border-b px-7.5 py-4">
            <div className="flex w-full items-center justify-between">
                <TicketChatBoxHeaderUserDetail userInitials={userInitials} userName={userName} id={id} />
                <TicketChaBoxHeaderActions handleTicketSidebar={handleToggleSidebar} open={open} />
            </div>
        </div>
    );
}
