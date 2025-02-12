import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TicketType } from '@/features/ticket-chat/types/ticket-chat-types';

type TicketListItemProps = {
    ticket: TicketType;
};

export function TicketListItem(props: TicketListItemProps) {
    const { userInitials, userName, ticketId, ticketStatus, ticketType, unReadMessages } = props.ticket;

    return (
        <>
            <Link
                href={'/dashboard/tickets/' + ticketId}
                className="flex relative items-center gap-3.5 [&:not(:first-child)]:pt-2"
            >
                <Avatar className="size-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>{userInitials}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="font-satoshi text-sm font-semibold text-stone-950">{userName}</span>
                    <div className="flex gap-2 items-center">
                        <div className="flex gap-1 font-satoshi  items-center font-medium text-[#A09B96] text-xs">
                            <span className="size-2 bg-[#45DEBA] rounded-full" />
                            {ticketStatus}
                        </div>
                        <div className="flex gap-1 items-center font-satoshi font-medium text-xs text-[#A09B96]">
                            {ticketType}
                        </div>
                    </div>
                </div>

                <div className="bg-blue-500 absolute right-2 px-1.5 py-1 size-5 text-2xs flex items-center justify-center font-satoshi font-bold text-primary-foreground rounded-md">
                    {unReadMessages}
                </div>
            </Link>
        </>
    );
}
