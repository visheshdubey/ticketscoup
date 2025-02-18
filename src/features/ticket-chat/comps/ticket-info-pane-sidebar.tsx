'use client';

import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';

import { TicketInfoPane } from './ticket-info-pane';
import { useDeviceType } from '@/features/dashboard/hooks/useMediaquery';

type Props = {
    open: boolean;
    onOpenChange?: (open: boolean) => void;
};

export function TicketInfoPaneSidebar({ open, onOpenChange }: Props) {
    const isMobile = useDeviceType();

    if (isMobile) {
        return (
            <Sheet open={open} onOpenChange={onOpenChange}>
                <SheetContent className="p-0 flex flex-col">
                    <SheetTitle></SheetTitle>
                    <TicketInfoPane className="w-full -z-10 max-w-full" />
                </SheetContent>
            </Sheet>
        );
    }

    return <>{open && <TicketInfoPane />}</>;
}
