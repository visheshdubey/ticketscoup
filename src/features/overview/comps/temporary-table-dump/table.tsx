import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ticketStatusColorMap } from '@/lib/config';
import { ticketStatusMap } from '@/lib/config';
import { cn } from '@/lib/utils';

export default function PageTable() {
    const invoices = [
        {
            id: 'TK-1023',
            client: 'John Doe',
            type: 'GST Return',
            status: 'IN_PROGRESS',
            lastUpdated: 'Sun Aug 11 2024',
            assginedTo: 'Vishesh Dubey',
        },
        {
            id: 'TK-1024',
            client: 'John Doe',
            type: 'GST Return',
            status: 'DONE',
            lastUpdated: 'Sun Aug 11 2024',
            assginedTo: 'Vishesh Dubey',
        },
        {
            id: 'TK-1025',
            client: 'John Doe',
            type: 'GST Return',
            status: 'HOLD',
            lastUpdated: 'Sun Aug 11 2024',
            assginedTo: 'Vishesh Dubey',
        },
        {
            id: 'TK-1026',
            client: 'John Doe',
            type: 'GST Return',
            status: 'CANCELLED',
            lastUpdated: 'Sun Aug 11 2024',
            assginedTo: 'Vishesh Dubey',
        },
        {
            id: 'TK-1027',
            client: 'John Doe',
            type: 'GST Return',
            status: 'CANCELLED',
            lastUpdated: 'Sun Aug 11 2024',
            assginedTo: 'Vishesh Dubey',
        },
        {
            id: 'TK-1028',
            client: 'John Doe',
            type: 'GST Return',
            status: 'CANCELLED',
            lastUpdated: 'Sun Aug 11 2024',
            assginedTo: 'Vishesh Dubey',
        },
    ];

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow className="bg-[#EAECFC] gap-[60px] border-none hover:bg-[#EAECFC] rounded-lg  pt-3.5 pb-3 font-satoshi font-medium text-sm leading-[18px">
                        <TableHead className="w-[129px] text-sm leading-[18px] font-medium text-gray-900 pl-[19px] rounded-tl-lg rounded-bl-lg">
                            ID
                        </TableHead>
                        <TableHead className="w-[194px] text-sm leading-[18px] font-medium  text-gray-900">
                            Client
                        </TableHead>
                        <TableHead className="w-[113px] text-sm leading-[18px] font-medium text-gray-900">
                            Type
                        </TableHead>
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
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.id} className="">
                            <TableCell className="w-[129px]   text-gray-900 pl-[19px] rounded-tl-lg rounded-bl-lg font-medium">
                                <a href={'#'} className="underline-offset-2 underline ">
                                    {invoice.id}
                                </a>
                            </TableCell>
                            <TableCell className="">{invoice.client}</TableCell>
                            <TableCell className="">{invoice.type}</TableCell>
                            <TableCell className="text-left">
                                <div className="flex justify-start items-center gap-2">
                                    <div
                                        className={cn(
                                            'inline-block w-2 h-2  rounded-[50%]',
                                            `${ticketStatusColorMap[invoice.status].bg}`
                                        )}
                                    ></div>
                                    <div
                                        className={cn(
                                            'font-satoshi font-medium text-sm leading-[18px]',
                                            `${ticketStatusColorMap[invoice.status].text}`
                                        )}
                                    >
                                        {ticketStatusMap[invoice.status]}
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="py-3">{invoice.lastUpdated}</TableCell>
                            <TableCell className="py-3">{invoice.assginedTo}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
