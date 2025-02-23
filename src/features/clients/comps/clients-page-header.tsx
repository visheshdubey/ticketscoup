import { DashboardPageTitle } from '@/features/dashboard/core/comps/dashboard-page-title';
import { ClientsPageSearch } from './clients-page-search';
import { ClientsPageActions } from './clients-page-actions';

type Props = {
    filtersApplied: boolean;
};

export function ClientsPageHeader({ filtersApplied }: Props) {
    return (
        <>
            <DashboardPageTitle>Clients</DashboardPageTitle>

            <div className="flex justify-between items-center ">
                <ClientsPageSearch />
                <ClientsPageActions filtersApplied={filtersApplied} />
            </div>
        </>
    );
}
