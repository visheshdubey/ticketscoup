
import { Staff } from '@/features/dashboard/types/types';
import { StaffListItemActions } from '@/features/staff/comps/staff-list-item-actions';


type Props = {
    staff: Staff;
};

export function StaffListItem({ staff }: Props) {
    return (
        <div key={staff.id} className="flex flex-col gap-2 border-b border-[#EAECEF] py-4">
            <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                <span className="font-satoshi text-2xs leading-[13px] text-[#A09B96]">{staff.id}</span>
                    <span className="font-satoshi font-bold text-sm leading-[18px] text-gray-900">
                        {staff.name}
                    </span>
                </div>
                <StaffListItemActions staff={staff} />
            </div>
            <div className="flex gap-2">
            
                <span className="px-2 py-1 font-satoshi font-medium text-xs leading-4 text-gray-900 text-center rounded-full bg-[#E2EFFD]">
                    AT: {staff.email}
                </span>
                <span className="px-2 py-1 text-center font-medium text-xs leading-4 text-gray-900 rounded-full bg-[#E2EFFD]">
                    {staff.totalTickets}
                </span>
                <div className="flex items-center gap-2 px-2 py-1 text-center text-xs leading-4 text-gray-900 rounded-full bg-[#E2EFFD]">
                    {staff.activeTickets}
                </div>
                <div className="flex items-center gap-2 px-2 py-1 text-center text-xs leading-4 text-gray-900 rounded-full bg-[#E2EFFD]">
                    {staff.closedTickets}
                </div>
            </div>
        </div>
    );
}
