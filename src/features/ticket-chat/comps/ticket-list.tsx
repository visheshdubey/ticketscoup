import { TicketListItem } from '@/features/ticket-chat/comps/ticket-list-item';
import { Ticket } from '@/constants/index';

type TicketListProps = {
    tickets: Ticket[];
};

export function TicketList({ tickets }: TicketListProps) {
    return (
        <>
            <div className="flex divide-y flex-col gap-2">
                {tickets.map((ticket) => (
                    <TicketListItem key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </>
    );
}
