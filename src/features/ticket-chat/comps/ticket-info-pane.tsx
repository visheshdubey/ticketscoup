import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MailIcon, PhoneIcon } from 'lucide-react';
import { TicketInfoPaneClientDetails } from './ticket-info-pane-client-details';

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
        <aside className="w-full h-full bg-white">
            <div className={cn(' max-w-xs shrink-0 px-4 py-6', className)}>
                <span className="font-medium text-base font-satoshi text-stone-950">Ticket Info</span>

                <TicketInfoPaneClientDetails clientDetails={clientDetails} segments={segments} />
            </div>
            <div className="flex border border-t-zinc-100 border-b-zinc-100 mt-9 py-2.5 px-4 gap-2.5">
                <Button
                    variant={'outline'}
                    className="h-7  border border-zinc-100 rounded-lg px-3 py-1 font-satoshi font-medium text-sm text-stone-950"
                >
                    Attachments
                </Button>
                <Button
                    variant={'outline'}
                    className="h-7 border border-zinc-100 rounded-lg px-3 py-1 font-satoshi font-medium text-sm text-stone-950"
                >
                    Related
                </Button>
            </div>
        </aside>
    );
}
