import { DashboardSectionTitle } from '@/features/dashboard/core/comps/dashboard-page-section-title';
import { ClientRecentTicketTableFilter } from './client-recent-ticket-table-filter';
import { ClientRecentTicketTableSearch } from './client-recent-ticket-table-search';

type Props = {
    filtersApplied: boolean;
};

export function ClientRecentTicketTableHeader({ filtersApplied }: Props) {
    return (
        <div className="flex justify-between items-center">
            <DashboardSectionTitle>Recent Tickets</DashboardSectionTitle>

            <div className="flex items-center gap-4">
                <ClientRecentTicketTableFilter filtersApplied={filtersApplied} />
                <ClientRecentTicketTableSearch />
            </div>
        </div>
    );
}
