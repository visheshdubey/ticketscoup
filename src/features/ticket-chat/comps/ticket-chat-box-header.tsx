'use client';

import { Button } from '@/components/ui/button';
import { UserAvatar } from '@/components/user-avatar';
import { Ticket } from '@/constants/index';
import { getNameInitials } from '@/lib/get-name-initials';
import { cn } from '@/lib/utils';
import { MenuIcon, PaperclipIcon, Variable } from 'lucide-react';
import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';

type TicketChatBoxHeaderProps = {
    ticket: Ticket;
};

export function TicketChatBoxHeader(props: TicketChatBoxHeaderProps) {
    const { userName, id } = props.ticket;
    const userInitials = getNameInitials(userName);
    const { toggleSidebar, open } = useSidebar();

    const handleTicketSidebar = () => {
        toggleSidebar();
    };

    return (
        <div className="w-full bg-white border-b px-7.5 py-4">
            <div className="flex w-full items-center justify-between">
                <div className="flex relative items-center gap-4 py-1.5">
                    <UserAvatar userInitials={userInitials} className="size-9" />
                    <div className="flex flex-col">
                        <span className="font-satoshi font-medium text-base text-[#0C0A09]">{userName}</span>
                        <div className="flex items-center">
                            <span className="font-medium font-satoshi text-[#A09B96] text-xs">{id}</span>
                        </div>
                    </div>
                </div>
                <div className={cn('flex items-center', open ? 'gap-4' : 'gap-10')}>
                    <div className={cn('flex transition-all duration-300 transform', open ? 'hidden' : 'gap-6')}>
                        <div className="flex border border-zinc-100 p-3 h-7 min-w-36 rounded-md"></div>
                        <div className="flex border border-zinc-100 p-3 h-7 min-w-36 rounded-md"></div>
                        <div className="flex border border-zinc-100 p-3 h-7 min-w-36 rounded-md"></div>
                    </div>
                    {!open && (
                        <Button size={'icon'} variant={'ghost'} className="flex h-7 w-7">
                            <PaperclipIcon size={16} />
                        </Button>
                    )}

                    <SidebarTrigger onClick={handleTicketSidebar}>
                        <div>
                            <Button data-sidebar="trigger" variant="ghost" className="h-7 w-7" size="icon">
                                <MenuIcon size={16} />
                            </Button>
                        </div>
                    </SidebarTrigger>
                </div>
            </div>
        </div>
    );
}
