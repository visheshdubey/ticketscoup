import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MailIcon, PhoneIcon } from 'lucide-react';
import { TicketInfoPaneClientDetails } from './ticket-info-pane-client-details';
import { Segment } from '@/constants/index';
import { TicketInfoSegments } from './ticket-info-segments';
import { TicketInfoPaneActions } from './ticket-info-pane-actions';

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
        <aside className="w-full h-full bg-white max-w-xs border border-l-zinc-100 transition-all duration-300 transform">
            <div className={cn(' max-w-xs shrink-0 px-4 py-6', className)}>
                <span className="font-medium text-base font-satoshi text-stone-950">Ticket Info</span>
            </div>
            <div className="max-w-xs shrink-0 px-4 flex flex-col gap-6">
                <TicketInfoPaneClientDetails clientDetails={clientDetails} />
                <TicketInfoSegments segments={segments} />
            </div>
            <TicketInfoPaneActions />
        </aside>
    );
}
