import { cn } from '@/lib/utils';
import { MenuIcon, PaperclipIcon, Variable } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
    open?: boolean;
    handleTicketSidebar: () => void;
};

export const TicketChaBoxHeaderActions = ({ open, handleTicketSidebar }: Props) => {
    return (
        <div className={cn('flex items-center', open ? 'gap-4' : 'gap-10')}>
            <div className={cn('flex transition-all duration-300 transform', open ? 'gap-2' : 'gap-6')}>
                <div className="flex border border-zinc-100 p-3 h-7 min-w-36 rounded-md"></div>
                <div className="flex border border-zinc-100 p-3 h-7 min-w-36 rounded-md"></div>
                <div className="flex border border-zinc-100 p-3 h-7 min-w-36 rounded-md"></div>
            </div>
            {!open && (
                <Button size={'icon'} variant={'ghost'} className="flex h-7 w-7">
                    <PaperclipIcon size={16} />
                </Button>
            )}

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
