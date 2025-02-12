'use client';

import * as React from 'react';
import { AudioWaveform, Command } from 'lucide-react';
import Image from 'next/image';
import { NavMain } from '@/features/dashboard/comps/nav-main';
import { NavUser } from '@/features/dashboard/comps/nav-user';
import { TeamSwitcher } from '@/features/dashboard/comps/team-switcher';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, useSidebar } from '@/components/ui/sidebar';
import { getMenuList } from '@/lib/config';
import { cn } from '@/lib/utils';
import { getTeamElements } from '@/lib/config';

const navMain = getMenuList('/');
const data = getTeamElements();

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { open } = useSidebar();
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className={cn('pt-6 font-satoshi pointer-events-none', open && 'pl-[25px] pr-[22px]')}>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={navMain.items} groupLabel={navMain.groupLabel} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}
