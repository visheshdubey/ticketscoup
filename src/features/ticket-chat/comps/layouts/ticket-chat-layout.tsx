'use client';

import DashboardContent from '@/features/dashboard/comps/dashboard-content';
import { DashboardPageTitle } from '@/features/dashboard/core/comps/dashboard-page-title';
import { TicketList } from '@/features/ticket-chat/comps/ticket-list';
import { cn } from '@/lib/utils';
import { tickets } from '@/lib/config';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useSidebar } from '@/components/ui/sidebar';

type Props = { children: React.ReactNode };

const TicketChatLayout = (props: Props) => {
    const { setOpen } = useSidebar();
    const path = usePathname();

    const isPathTicketChatMainRoute = path === '/dashboard/tickets' || path === '/dashboard/tickets';

    useEffect(() => {
        setOpen(false);
    }, []);

    return (
        <DashboardContent className="pb-0 md:pr-0">
            <div className="flex w-full h-full border-t">
                <div
                    className={cn(
                        'w-full lg:w-1/4 shrink-0 max-w-full px-4 bg-white lg:max-w-xs h-full pr-4 lg:pl-0 border-r flex flex-col pt-2 gap-4',
                        isPathTicketChatMainRoute ? 'flex' : 'hidden lg:flex'
                    )}
                >
                    <DashboardPageTitle className="text-xl">Ticket Chat</DashboardPageTitle>
                    <div className="flex flex-col gap-3">
                        <div className="w-full h-9 text-sm border rounded-md flex items-center px-4">Search</div>
                        <TicketList tickets={tickets} />
                    </div>
                </div>
                {props.children}
            </div>
        </DashboardContent>
    );
};

export default TicketChatLayout;
