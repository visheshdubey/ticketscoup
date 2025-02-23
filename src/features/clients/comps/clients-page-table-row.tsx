"use client";

import { TableCell, TableRow } from '@/components/ui/table';
import { Client} from '@/features/dashboard/types/types';
import { ClientsPageTableRowActions } from './clients-page-table-row-actions';


type Props = {
    client: Client;
};

export function ClientsPageTableRow({ client }: Props) {
    return (
        <TableRow key={client.id}>
            <TableCell className="w-[93px] text-gray-900 pl-[19px] rounded-tl-lg rounded-bl-lg font-medium">
                <a href={'/dashboard/clients/'+client.id} className="underline-offset-2 underline ">
                    {client.id}
                </a>
            </TableCell>
            <TableCell className="w-[126px]">{client.name}</TableCell>
            <TableCell className="w-[143px]">{client.email}</TableCell>
            <TableCell className="w-[143px] text-left">{client.totalTickets}</TableCell>
            <TableCell className="py-3 w-[143px]">{client.lastTicketOn}</TableCell>
            <TableCell className="py-3 w-[143px]">
                <ClientsPageTableRowActions client={client} />
            </TableCell>
        </TableRow>
    );
}
