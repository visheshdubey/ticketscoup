import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, useSidebar } from '@/components/ui/sidebar';
import { TicketInfoPane } from './ticket-info-pane';
import { useEffect } from 'react';

type Props = {
    open: boolean;
};

export function TicketInfoPaneSidebar({ open }: Props) {
    return <>{open && <TicketInfoPane />}</>;
}
