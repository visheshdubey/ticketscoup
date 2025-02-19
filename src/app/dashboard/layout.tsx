'use client';

import DashboardLayout from '@/features/dashboard/comps/layouts/dashboard-layout';

type DashboardRootLayoutProps = {
    children: React.ReactNode;
};

export default function DashboardRootLayout({ children }: DashboardRootLayoutProps) {
    return <DashboardLayout>{children}</DashboardLayout>;
}
