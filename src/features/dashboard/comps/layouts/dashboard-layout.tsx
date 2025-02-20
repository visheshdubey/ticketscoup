'use client';

import { PageKey, getMenuList, getTeamElements, pageTitleMap } from '@/lib/config';

import { DashboardProvider } from '@/features/dashboard/core/comps/dashboard-provider';
import { DashboardSidebar } from '@/features/dashboard/core/comps/dashboard-sidebar';
import PageHeader from '../page-header';
import { SidebarInset } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type DashboardLayoutProps = {
    children: React.ReactNode;
};

const navMain = getMenuList('/');
const data = getTeamElements();

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const [hasNotifications, setHasNotifications] = useState(true);
    const pathName = usePathname().split('/').pop();
    const pageBreadcrumbTitle = pageTitleMap[pathName as PageKey];

    return (
        <DashboardProvider>
            <DashboardSidebar menu={navMain} team={data.teams} user={data.user} />
            <SidebarInset className="md:bg-[#0C0A09]">
                <PageHeader hasNotifications={hasNotifications} pageBreadcrumbTitle={pageBreadcrumbTitle} />
                {children}
            </SidebarInset>
        </DashboardProvider>
    );
}
