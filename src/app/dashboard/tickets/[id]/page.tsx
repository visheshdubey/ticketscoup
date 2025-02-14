'use client';

import TicketChatBox from '@/features/ticket-chat/comps/ticket-chat-box';
import { TicketInfoPaneSidebar } from '@/features/ticket-chat/comps/ticket-info-pane-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

type Props = {};

const TicketDetailPage = (props: Props) => {
    return (
        <>
            <SidebarProvider>
                <SidebarInset>
                    <TicketChatBox />
                </SidebarInset>
                <TicketInfoPaneSidebar />
            </SidebarProvider>
        </>
    );
};

export default TicketDetailPage;
