import { DashboardSectionTitle } from '@/features/dashboard/core/comps/dashboard-page-section-title';
import { RecentTicketTableFilter } from './recent-ticket-table-filter';
import { RecentTicketTableSearch } from './recent-ticket-table-search';

type Props = {
    filtersApplied: boolean;
};

export function RecentTicketTableHeader({ filtersApplied }: Props) {
    return (
        <div className="flex justify-between items-center">
            <DashboardSectionTitle>Recent Tickets</DashboardSectionTitle>

            <div className="flex items-center gap-4">
                <RecentTicketTableFilter filtersApplied={filtersApplied} />
                <RecentTicketTableSearch />
            </div>
        </div>
    );
}
