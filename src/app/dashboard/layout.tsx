'use client';

import DashboardLayout from '@/features/dashboard/comps/dashboard-layout';

export default function PageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <DashboardLayout>{children}</DashboardLayout>;
}
