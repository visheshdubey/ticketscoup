'use client';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

import AppHeader from '@/features/dashboard/comps/app-header';
import { AppSidebar } from '@/features/dashboard/comps/app-sidebar';
import { useState } from 'react';

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [hasNotifications, setHasNotifications] = useState(true);

    return (
        <SidebarProvider className="h-screen overflow-clip">
            <AppSidebar />
            <SidebarInset className="md:bg-[#0C0A09]">
                <AppHeader hasNotifications={hasNotifications} />
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}
