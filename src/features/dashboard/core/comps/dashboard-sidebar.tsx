'use client';

import * as React from 'react';

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, useSidebar } from '@/components/ui/sidebar';

import { SidebarNavMain } from '@/features/dashboard/comps/sidebar-nav-main';
import { SidebarNavUser } from '@/features/dashboard/comps/sidebar-nav-user';
import { SidebarTeamSwitcher } from '@/features/dashboard/comps/sidebar-team-switcher';
import { cn } from '@/lib/utils';

// TODO: These types should be properly defined
type DashboardSidebarExtendedProps = {
    team: any;
    menu: any;
    user: any;
};

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar> & DashboardSidebarExtendedProps) {
    const { open } = useSidebar();

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className={cn('pt-6 font-satoshi pointer-events-none', open && 'pl-[25px] pr-[22px]')}>
                <SidebarTeamSwitcher teams={props.team} />
            </SidebarHeader>
            <SidebarContent>
                <SidebarNavMain items={props.menu.items} groupLabel={props.menu.groupLabel} />
            </SidebarContent>
            <SidebarFooter>
                <SidebarNavUser user={props.user} />
            </SidebarFooter>
        </Sidebar>
    );
}
