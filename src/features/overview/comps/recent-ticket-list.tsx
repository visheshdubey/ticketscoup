import { Invoice } from '@/features/dashboard/types/types';
import { RecentTicketListItem } from './recent-ticket-list-item';

type Props = {
    invoices: Invoice[];
};

export default function RecentTicketList({ invoices }: Props) {
    return (
        <>
            {invoices.map((invoice) => (
                <RecentTicketListItem key={invoice.id} invoice={invoice} />
            ))}
        </>
    );
}
