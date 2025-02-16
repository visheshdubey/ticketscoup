import { Button } from '@/components/ui/button';
import { MailIcon, PhoneIcon } from 'lucide-react';

export type TicketInfoPaneClientDetailsProps = {
    clientDetails: {
        name: string;
        organization: string;
    };
};

export function TicketInfoPaneClientDetails({ clientDetails }: TicketInfoPaneClientDetailsProps) {
    const { name, organization } = clientDetails;

    return (
        <div className="flex flex-col pt-6">
            <div className="flex flex-col gap-3">
                <span className="font-satoshi font-medium text-xs text-neutral-400">Client Details</span>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <span className="flex font-satoshi font-medium text-base text-stone-950">{name}</span>
                        <div className="flex gap-4">
                            <Button size={'icon'} variant={'ghost'} className="h-6 w-6 text-neutral-600">
                                <MailIcon size={16} />
                            </Button>
                            <Button size={'icon'} variant={'ghost'} className="h-6 w-6 text-neutral-600">
                                <PhoneIcon size={16} />
                            </Button>
                        </div>
                    </div>
                    <span className="flex font-satoshi text-2xs text-[#7D7D7D]">{organization}</span>
                </div>
            </div>
        </div>
    );
}
