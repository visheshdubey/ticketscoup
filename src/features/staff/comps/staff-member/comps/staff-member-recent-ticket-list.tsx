import { Invoice } from '@/features/dashboard/types/types';
import { StaffMemberRecentTicketListItem } from './staff-member-recent-ticket-list-item';

type Props = {
    invoices: Invoice[];
};

export default function StaffMemberRecentTicketList({ invoices }: Props) {
    return (
        <>
            {invoices.map((invoice) => (
                <StaffMemberRecentTicketListItem key={invoice.id} invoice={invoice} />
            ))}
        </>
    );
}
