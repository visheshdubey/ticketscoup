import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Staff } from '@/features/dashboard/types/types';
import Spinner from '@/components/spinner';
import { isEmpty } from '@/lib/utils/lodash-is-empty';
import { StaffPageTableRow } from './staff-page-table-row';

type Props = {
    staff: Staff[];
};

export function StaffPageTable({ staff }: Props) {
    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-[#EAECFC] gap-[60px] border-none hover:bg-[#EAECFC] rounded-lg  pt-3.5 pb-3 font-satoshi font-medium text-sm leading-[18px">
                    <TableHead className="w-[129px] text-sm leading-[18px] font-medium text-gray-900 pl-[19px] rounded-tl-lg rounded-bl-lg">
                        ID
                    </TableHead>
                    <TableHead className="w-[194px] text-sm leading-[18px] font-medium  text-gray-900">Name</TableHead>
                    <TableHead className="w-[113px] text-sm leading-[18px] font-medium  text-gray-900">Email</TableHead>
                    <TableHead className="w-[113px] text-sm leading-[18px] font-medium  text-gray-900">
                        Total Tickets
                    </TableHead>
                    <TableHead className="w-[113px] text-sm leading-[18px] font-medium  text-gray-900 ">
                        Active Tickets
                    </TableHead>
                    <TableHead className="w-[113px] text-sm leading-[18px] font-medium  text-gray-900 rounded-tr-lg rounded-br-lg">
                        Closed Tickets
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {!staff && (
                    <TableRow className="h-[400px] hover:bg-white">
                        <TableCell colSpan={6} className="text-center">
                            <div className="flex items-center justify-center h-full">
                                <Spinner size="xs" />
                            </div>
                        </TableCell>
                    </TableRow>
                )}
                {isEmpty(staff) ? (
                    <TableRow className="h-[400px] hover:bg-white">
                        <TableCell colSpan={6} className="text-center">
                            <span className="font-satoshi text-gray-900 text-sm">No Tickets to show.</span>
                        </TableCell>
                    </TableRow>
                ) : (
                    staff.map((staff) => <StaffPageTableRow key={staff.id} staff={staff} />)
                )}
            </TableBody>
        </Table>
    );
}
