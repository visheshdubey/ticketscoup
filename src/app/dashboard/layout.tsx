'use client';

import DashboardLayout from '@/features/dashboard/comps/layouts/dashboard-layout';
import { getAPIErrorDetail } from '@/lib/api/get-api-error-detail';
import { useEffect } from 'react';
import { useQueryProfile } from '@/features/profile/hooks/useQueryProfile';

type DashboardRootLayoutProps = {
    children: React.ReactNode;
};

export default function DashboardRootLayout({ children }: DashboardRootLayoutProps) {
    const { data, error } = useQueryProfile();

    useEffect(() => {
        console.log(getAPIErrorDetail(error));
    }, [data, error]);

    return <DashboardLayout>{children}</DashboardLayout>;
}
