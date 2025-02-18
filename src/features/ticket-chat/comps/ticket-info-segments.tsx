import { Segment } from '@/constants/index';
import TicketChatBoxHeaderActionsAssignedTo from './ticket-chat-box-header-actions-ticket-assigned-to';
import TicketChatBoxHeaderActionsStatus from './ticket-chat-box-header-actions-ticket-status';
import TicketChatBoxHeaderActionsType from './ticket-chat-box-header-actions-ticket-type';

type Props = {
    segments: Segment[];
};

export function TicketInfoSegments({ segments }: Props) {
    if (!segments) {
        return;
    }

    return (
        <>
            <div className="flex flex-col gap-3">
                <span className="font-satoshi font-medium text-xs text-neutral-400">Status</span>
                <TicketChatBoxHeaderActionsStatus />
            </div>
            <div className="flex flex-col gap-3">
                <span className="font-satoshi font-medium text-xs text-neutral-400">Type</span>

                <TicketChatBoxHeaderActionsType />
            </div>
            <div className="flex flex-col gap-3">
                <span className="font-satoshi font-medium text-xs text-neutral-400">Assigned To</span>

                <TicketChatBoxHeaderActionsAssignedTo />
            </div>
        </>
    );
}
