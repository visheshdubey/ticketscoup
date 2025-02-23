'use client';

import DashboardPageSection from '@/features/dashboard/core/comps/dashboard-page-section';
import { DashboardPageTitle } from '@/features/dashboard/core/comps/dashboard-page-title';
import { StaffPageSearch } from '../staff-page-search';
import { useState } from 'react';
import { StaffPageTable } from '../staff-page-table';
import { staff } from '@/lib/config';
import StaffList from '../staff-list';
import { StaffPageHeader } from '../staff-page-header';

export function StaffPageWrapper() {
    const [filtersApplied, setFiltersApplied] = useState(false);

    return (
        <>
            <DashboardPageSection className="!h-max gap-4 md:gap-6 ">
                <StaffPageHeader filtersApplied={filtersApplied} />
            </DashboardPageSection>

            <DashboardPageSection className="h-max">
                <div className="pt-5 hidden md:block">
                    <StaffPageTable staff={staff} />
                </div>
                <div className="md:hidden pt-4">
                    <StaffList staff={staff} />
                </div>
            </DashboardPageSection>
        </>
    );
}
