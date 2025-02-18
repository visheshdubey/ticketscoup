'use client';

import { Sheet, SheetClose, SheetContent, SheetTitle } from '@/components/ui/sheet';

import { TicketInfoPane } from './ticket-info-pane';
import { X } from 'lucide-react';
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
                <SheetContent className="p-0">
                    <SheetTitle></SheetTitle>
                    <SheetClose className="absolute right-4 top-4 z-[9000]">
                        <X className="size-4" />
                    </SheetClose>
                    <TicketInfoPane className="mt-4 bg-transparent pointer-events-none" />
                </SheetContent>
            </Sheet>
        );
    }

    return <>{open && <TicketInfoPane />}</>;
}
