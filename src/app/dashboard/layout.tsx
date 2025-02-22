'use client';

import DashboardLayout from '@/features/dashboard/comps/layouts/dashboard-layout';
import { getAPIErrorDetail } from '@/lib/api/get-api-error-detail';
import { useEffect } from 'react';
import { useQueryProfile } from '@/features/profile/hooks/useQueryProfile';
import { useQueryTeam } from '@/features/team/hooks/use-query-team';
import { useQueryTeamTicketTypes } from '@/features/team/hooks/use-query-team-ticket-types';

type DashboardRootLayoutProps = {
    children: React.ReactNode;
};

export default function DashboardRootLayout({ children }: DashboardRootLayoutProps) {
    const { data, error } = useQueryProfile();
    const data1 = useQueryTeamTicketTypes();
    const data2 = useQueryTeam();

    useEffect(() => {
        console.log(getAPIErrorDetail(error));
    }, [data, error]);

    return <DashboardLayout>{children}</DashboardLayout>;
}
