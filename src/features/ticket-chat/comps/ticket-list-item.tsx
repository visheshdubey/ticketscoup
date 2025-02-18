import Link from 'next/link';
import { Ticket } from '@/constants/index';
import { getNameInitials } from '@/lib/get-name-initials';
import { UserAvatar } from '@/components/user-avatar';
import { TicketChatUnreadCounterBadge } from './ticket-chat-unread-counter-badge';

type TicketListItemProps = {
    ticket: Ticket;
};

export function TicketListItem(props: TicketListItemProps) {
    const { userName, id, status, type, unReadCount } = props.ticket;
    const userInitials = getNameInitials(userName);

    return (
        <Link
            href={'/dashboard/tickets/' + id}
            className="flex relative items-center gap-3.5 [&:not(:first-child)]:pt-2"
        >
            <UserAvatar userInitials={userInitials} />
            <div className="flex flex-col">
                <span className="font-satoshi text-sm font-semibold text-stone-950">{userName}</span>
                <div className="flex gap-2 items-center">
                    <div className="flex gap-1 font-satoshi  items-center font-medium text-[#A09B96] text-xs">
                        <span className="size-2 bg-[#45DEBA] rounded-full" />
                        {status}
                    </div>
                    <div className="flex gap-1 items-center font-satoshi font-medium text-xs text-[#A09B96]">
                        {type}
                    </div>
                </div>
            </div>

            <TicketChatUnreadCounterBadge unReadCount={unReadCount} />
        </Link>
    );
}
