import { cn } from '@/lib/utils';

type TicketChatUnreadCounterBadgeProps = {
    unReadCount: number;
    className?: string;
};

export function TicketChatUnreadCounterBadge({ unReadCount, className }: TicketChatUnreadCounterBadgeProps) {
    if (!unReadCount) return;

    return (
        <div
            className={cn(
                'bg-blue-500 absolute right-2 px-1.5 py-1 size-5 text-2xs flex items-center justify-center font-satoshi font-bold text-primary-foreground rounded-md',
                className
            )}
        >
            {unReadCount}
        </div>
    );
}
