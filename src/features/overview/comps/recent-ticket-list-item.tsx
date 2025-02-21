import { Invoice } from '@/features/dashboard/types/types';
import { ticketStatusColorMap, ticketStatusMap } from '@/lib/config';
import { cn } from '@/lib/utils';
import { RecentTicketListItemActions } from './recent-ticket-list-item-actions';

type Props = {
    invoice: Invoice;
};

export function RecentTicketListItem({ invoice }: Props) {
    return (
        <div key={invoice.id} className="flex flex-col gap-2 border-b border-[#EAECEF] py-4">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <span className="font-satoshi text-2xs leading-[13px] text-[#A09B96]">{invoice.id}</span>
                    <span className="font-satoshi font-bold text-sm leading-[18px] text-gray-900">
                        {invoice.client}
                    </span>
                </div>
                <RecentTicketListItemActions invoice={invoice} />
            </div>
            <div className="flex gap-2">
                <span className="px-2 py-1 font-satoshi font-medium text-xs leading-4 text-gray-900 text-center rounded-full bg-[#E2EFFD]">
                    AT: {invoice.assginedTo}
                </span>
                <span className="px-2 py-1 text-center font-medium text-xs leading-4 text-gray-900 rounded-full bg-[#E2EFFD]">
                    {invoice.type}
                </span>
                <div className="flex items-center gap-2 px-2 py-1 text-center text-xs leading-4 text-gray-900 rounded-full bg-[#E2EFFD]">
                    <span
                        className={cn('inline-block w-2 h-2 rounded-full', ticketStatusColorMap[invoice.status].bg)}
                    ></span>
                    <span
                        className={cn(
                            'font-satoshi font-medium text-xs leading-4',
                            ticketStatusColorMap[invoice.status].text
                        )}
                    >
                        {ticketStatusMap[invoice.status]}
                    </span>
                </div>
            </div>
        </div>
    );
}
