import { TicketListItem } from '@/features/ticket-chat/comps/ticket-list-item';
import { TicketType } from '@/features/ticket-chat/types/ticket-chat-types';

type TicketListProps = {
    tickets: TicketType[];
};

export function TicketList({ tickets }: TicketListProps) {
    return (
        <>
            <div className="flex divide-y border-zinc-100 flex-col gap-2">
                {tickets.map((ticket) => (
                    <TicketListItem key={ticket.ticketId} ticket={ticket} />
                ))}{' '}
            </div>
        </>
    );
}
