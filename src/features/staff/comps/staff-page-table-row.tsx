"use client";

import { TableCell, TableRow } from '@/components/ui/table';
import { Staff } from '@/features/dashboard/types/types';
import { StaffPageTableRowActions } from './staff-page-table-row-actions';


type Props = {
    staff: Staff;
};

export function StaffPageTableRow({ staff }: Props) {
    return (
        <TableRow key={staff.id}>
            <TableCell className="w-[93px] text-gray-900 pl-[19px] rounded-tl-lg rounded-bl-lg font-medium">
                <a href={'/dashboard/staff/'+staff.id} className="underline-offset-2 underline ">
                    {staff.id}
                </a>
            </TableCell>
            <TableCell className="w-[126px]">{staff.name}</TableCell>
            <TableCell className="w-[143px]">{staff.email}</TableCell>
            <TableCell className="w-[143px] text-left">{staff.totalTickets}</TableCell>
            <TableCell className="py-3 w-[143px]">{staff.activeTickets}</TableCell>
            <TableCell className="py-3 w-[143px]">
                <StaffPageTableRowActions staff={staff} />
            </TableCell>
        </TableRow>
    );
}
