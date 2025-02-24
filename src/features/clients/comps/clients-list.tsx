import { Client } from '@/features/dashboard/types/types';
import {ClientsListItem} from './clients-list-item';

type Props = {
    clients: Client[];
};

export default function ClientsList({ clients }: Props) {
    return (
        <>
            {clients.map((client) => (
                <ClientsListItem key={client.id} client={client} />
            ))}
        </>
    );
}
