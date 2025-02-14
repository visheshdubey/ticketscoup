import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, useSidebar } from '@/components/ui/sidebar';
import { TicketInfoPane } from './ticket-info-pane';
import { useEffect } from 'react';

export function TicketInfoPaneSidebar() {
    const { setOpen } = useSidebar();

    useEffect(() => {
        setOpen(false);
    }, []);
    return (
        <>
            <Sidebar className="mt-[57px] z-[2]" collapsible={'offcanvas'} side="right">
                <TicketInfoPane />
            </Sidebar>
        </>
    );
}
