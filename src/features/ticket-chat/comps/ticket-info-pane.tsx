import { cn } from '@/lib/utils';

type TicketInfoPaneProps = {
    className?: string;
};

export function TicketInfoPane({ className }: TicketInfoPaneProps) {
    return (
        <aside className={cn('w-1/4 max-w-xs shrink-0 h-full bg-white border-l p-4', className)}>
            <span className="font-medium text-lg font-satoshi">Ticket Details</span>
        </aside>
    );
}
