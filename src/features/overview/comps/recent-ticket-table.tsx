import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { Invoice } from '@/features/dashboard/types/types';
import { RecentTicketTableRow } from './recent-ticket-table-row';
import Spinner from '@/components/spinner';
import { isEmpty } from '@/lib/utils/lodash-is-empty';

type Props = {
    invoices: Invoice[];
};

export default function RecentTicketTable({ invoices }: Props) {
    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-[#EAECFC] gap-[60px] border-none hover:bg-[#EAECFC] rounded-lg  pt-3.5 pb-3 font-satoshi font-medium text-sm leading-[18px">
                    <TableHead className="w-[129px] text-sm leading-[18px] font-medium text-gray-900 pl-[19px] rounded-tl-lg rounded-bl-lg">
                        ID
                    </TableHead>
                    <TableHead className="w-[194px] text-sm leading-[18px] font-medium  text-gray-900">
                        Client
                    </TableHead>
                    <TableHead className="w-[113px] text-sm leading-[18px] font-medium text-gray-900">Type</TableHead>
                    <TableHead className="w-[113px] text-sm leading-[18px] font-medium  text-gray-900">
                        Status
                    </TableHead>
                    <TableHead className="w-[113px] text-sm leading-[18px] font-medium  text-gray-900">
                        Last Updated
                    </TableHead>
                    <TableHead className="w-[113px] text-sm leading-[18px] font-medium  text-gray-900 rounded-tr-lg rounded-br-lg">
                        Assigned To
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {!invoices && (
                    <TableRow className="h-[400px] hover:bg-white">
                        <TableCell className="text-center">
                            <div className="flex items-center justify-center h-full">
                                <Spinner size="xs" />
                            </div>
                        </TableCell>
                    </TableRow>
                )}
                {isEmpty(invoices) ? (
                    <TableRow className="h-[400px] hover:bg-white">
                        <TableCell className="text-center">
                            <div className="flex items-center justify-center h-full">
                                <span className="font-satoshi text-gray-900 text-sm">No Tickets to show.</span>
                            </div>
                        </TableCell>
                    </TableRow>
                ) : (
                    invoices.map((invoice) => <RecentTicketTableRow key={invoice.id} invoice={invoice} />)
                )}
            </TableBody>
        </Table>
    );
}
