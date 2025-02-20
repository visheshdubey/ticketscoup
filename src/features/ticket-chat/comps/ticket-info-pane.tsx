import { TicketInfoPaneActions } from './ticket-info-pane-actions';
import { TicketInfoPaneClientDetails } from './ticket-info-pane-client-details';
import { TicketInfoSegments } from './ticket-info-segments';
import { cn } from '@/lib/utils';

type TicketInfoPaneProps = {
    className?: string;
};

export function TicketInfoPane({ className }: TicketInfoPaneProps) {
    const segments = [
        { heading: 'Status', selectOptions: [] },
        { heading: 'Assigned to', selectOptions: [] },
        { heading: 'Type', selectOptions: [] },
    ];

    const clientDetails = {
        name: 'Vishesh Kumar Dubey',
        organization: 'XYZ Organization',
    };

    return (
        <aside
            className={cn(
                'w-full h-full overflow-y-auto bg-white max-w-xs border border-t-0 border-l-zinc-100 transition-all duration-300 transform',
                className
            )}
        >
            <div className={'shrink-0 px-4 py-6'}>
                <span className="font-medium text-base font-satoshi text-stone-950">Ticket Info</span>
            </div>
            <div className="shrink-0 px-4 flex flex-col gap-6">
                <TicketInfoPaneClientDetails clientDetails={clientDetails} />
                <TicketInfoSegments segments={segments} />
            </div>
            <TicketInfoPaneActions />
        </aside>
    );
}
