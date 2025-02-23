import { Invoice } from '@/features/dashboard/types/types';
import { ClientRecentTicketListItem } from './client-recent-ticket-list-item';

type Props = {
    invoices: Invoice[];
};

export default function ClientRecentTicketList({ invoices }: Props) {
    return (
        <>
            {invoices.map((invoice) => (
                <ClientRecentTicketListItem key={invoice.id} invoice={invoice} />
            ))}
        </>
    );
}
