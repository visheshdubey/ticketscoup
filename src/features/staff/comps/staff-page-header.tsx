import { DashboardPageTitle } from '@/features/dashboard/core/comps/dashboard-page-title';
import { StaffPageSearch } from './staff-page-search';
import { StaffPageActions } from './staff-page-actions';

type Props = {
    filtersApplied: boolean;
};

export function StaffPageHeader({ filtersApplied }: Props) {
    return (
        <>
            <DashboardPageTitle>Staff</DashboardPageTitle>

            <div className="flex justify-between items-center ">
                <StaffPageSearch />
                <StaffPageActions filtersApplied={filtersApplied} />
            </div>
        </>
    );
}
