import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import TicketChatBoxHeaderActionsAssignedTo from './ticket-chat-box-header-actions-ticket-assigned-to';
import TicketChatBoxHeaderActionsStatus from './ticket-chat-box-header-actions-ticket-status';
import TicketChatBoxHeaderActionsType from './ticket-chat-box-header-actions-ticket-type';
import { cn } from '@/lib/utils';

type Props = {
    open?: boolean;
    handleTicketSidebar: () => void;
};

export const TicketChaBoxHeaderActions = ({ open, handleTicketSidebar }: Props) => {
    return (
        <div className={cn('flex items-center', open ? 'gap-4' : 'gap-10')}>
            <div className={cn('hidden xl:flex transition-all duration-300 transform', open ? 'gap-2' : 'gap-6')}>
                <TicketChatBoxHeaderActionsStatus />
                <TicketChatBoxHeaderActionsType />
                <TicketChatBoxHeaderActionsAssignedTo />
            </div>

            <Button
                onClick={handleTicketSidebar}
                data-sidebar="trigger"
                variant="ghost"
                className="h-7 w-7"
                size="icon"
            >
                <MenuIcon size={16} />
            </Button>
        </div>
    );
};
