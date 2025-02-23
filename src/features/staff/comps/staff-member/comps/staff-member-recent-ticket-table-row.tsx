import { TableCell, TableRow } from '@/components/ui/table';
import { Invoice } from '@/features/dashboard/types/types';
import { ticketStatusColorMap, ticketStatusMap } from '@/lib/config';
import { cn } from '@/lib/utils';
import { StaffMemberRecentTicketTableRowActions } from './staff-member-recent-ticket-table-row-actions';

type Props = {
    invoice: Invoice;
};

export function StaffMemberRecentTicketTableRow({ invoice }: Props) {
    return (
        <TableRow key={invoice.id}>
            <TableCell className="w-[129px]   text-gray-900 pl-[19px] rounded-tl-lg rounded-bl-lg font-medium">
                <a href={'#'} className="underline-offset-2 underline ">
                    {invoice.id}
                </a>
            </TableCell>
            <TableCell>{invoice.client}</TableCell>
            <TableCell>{invoice.type}</TableCell>
            <TableCell className="text-left">
                <div className="flex justify-start items-center gap-2">
                    <div
                        className={cn('inline-block w-2 h-2  rounded-[50%]', ticketStatusColorMap[invoice.status].bg)}
                    ></div>
                    <div
                        className={cn(
                            'font-satoshi font-medium text-sm leading-[18px]',
                            ticketStatusColorMap[invoice.status].text
                        )}
                    >
                        {ticketStatusMap[invoice.status]}
                    </div>
                </div>
            </TableCell>
            <TableCell className="py-3">{invoice.lastUpdated}</TableCell>
            <TableCell className="py-3">
                <StaffMemberRecentTicketTableRowActions invoice={invoice} />
            </TableCell>
        </TableRow>
    );
}
