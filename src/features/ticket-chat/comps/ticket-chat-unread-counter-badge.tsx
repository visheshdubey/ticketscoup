type TicketChatUnreadCounterBadgeProps = {
    unReadCount: number;
};

export function TicketChatUnreadCounterBadge({ unReadCount }: TicketChatUnreadCounterBadgeProps) {
    return (
        <div className="bg-blue-500 absolute right-2 px-1.5 py-1 size-5 text-2xs flex items-center justify-center font-satoshi font-bold text-primary-foreground rounded-md">
            {unReadCount}
        </div>
    );
}
