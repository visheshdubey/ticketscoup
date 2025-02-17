'use client';

import TicketChatBox from '@/features/ticket-chat/comps/ticket-chat-box';
import { TicketInfoPaneSidebar } from '@/features/ticket-chat/comps/ticket-info-pane-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { useState } from 'react';

type Props = {};

const TicketDetailPageLayout = (props: Props) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    function handleToggleSidebar() {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <>
            <TicketChatBox handleToggleSidebar={handleToggleSidebar} open={sidebarOpen} />
            <TicketInfoPaneSidebar open={sidebarOpen} />
        </>
    );
};

export default TicketDetailPageLayout;
