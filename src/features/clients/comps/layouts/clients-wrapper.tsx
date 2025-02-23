'use client';

import DashboardPageSection from '@/features/dashboard/core/comps/dashboard-page-section';
import { useState } from 'react';
import { ClientsPageTable } from '../clients-page-table';
import { clients } from '@/lib/config';
import ClientsList from '../clients-list';
import { ClientsPageHeader } from '../clients-page-header';

export function ClientsPageWrapper() {
    const [filtersApplied, setFiltersApplied] = useState(false);

    return (
        <>
            <DashboardPageSection className="!h-max gap-4 md:gap-6 ">
                <ClientsPageHeader filtersApplied={filtersApplied} />
            </DashboardPageSection>

            <DashboardPageSection className="h-max">
                <div className="pt-5 hidden md:block">
                    <ClientsPageTable clients={clients} />
                </div>
                <div className="md:hidden pt-4">
                    <ClientsList clients={clients} />
                </div>
            </DashboardPageSection>
        </>
    );
}
