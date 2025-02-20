import { Button } from '@/components/ui/button';

export const TicketInfoPaneActions = () => {
    return (
        <div className="flex border-y border-t-zinc-100 border-b-zinc-100 mt-9 py-2.5 px-4">
            <Button
                variant={'outline'}
                className="h-7  border border-zinc-100 rounded-lg px-3 py-1 font-satoshi font-medium text-sm text-stone-950"
            >
                Attachments
            </Button>
        </div>
    );
};
