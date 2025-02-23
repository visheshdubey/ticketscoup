import { DashboardSectionTitle } from '@/features/dashboard/core/comps/dashboard-page-section-title';
import { StaffMemberRecentTicketTableFilter } from './staff-member-recent-ticket-table-filter';
import { StaffMemberRecentTicketTableSearch } from './staff-member-recent-ticket-table-search';

type Props = {
    filtersApplied: boolean;
};

export function StaffMemberRecentTicketTableHeader({ filtersApplied }: Props) {
    return (
        <div className="flex justify-between items-center">
            <DashboardSectionTitle>Recent Tickets</DashboardSectionTitle>

            <div className="flex items-center gap-4">
                <StaffMemberRecentTicketTableFilter filtersApplied={filtersApplied} />
                <StaffMemberRecentTicketTableSearch />
            </div>
        </div>
    );
}
