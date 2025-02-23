
import { Client } from '@/features/dashboard/types/types';
import { ClientsListItemActions } from '@/features/clients/comps/clients-list-item-actions';


type Props = {
    client: Client;
};

export function ClientsListItem({ client }: Props) {
    return (
        <div key={client.id} className="flex flex-col gap-2 border-b border-[#EAECEF] py-4">
            <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                <span className="font-satoshi text-2xs leading-[13px] text-[#A09B96]">{client.id}</span>
                    <span className="font-satoshi font-bold text-sm leading-[18px] text-gray-900">
                        {client.name}
                    </span>
                </div>
                <ClientsListItemActions client={client} />
            </div>
            <div className="flex gap-2">
            
                <span className="px-2 py-1 font-satoshi font-medium text-xs leading-4 text-gray-900 text-center rounded-full bg-[#E2EFFD]">
                    AT: {client.email}
                </span>
                <span className="px-2 py-1 text-center font-medium text-xs leading-4 text-gray-900 rounded-full bg-[#E2EFFD]">
                    {client.totalTickets}
                </span>
                <div className="flex items-center gap-2 px-2 py-1 text-center text-xs leading-4 text-gray-900 rounded-full bg-[#E2EFFD]">
                    {client.lastTicketOn}
                </div>
                <div className="flex items-center gap-2 px-2 py-1 text-center text-xs leading-4 text-gray-900 rounded-full bg-[#E2EFFD]">
                    {client.joinedOn}
                </div>
            </div>
        </div>
    );
}
