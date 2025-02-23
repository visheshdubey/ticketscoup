import { Invoice } from '@/features/dashboard/types/types';

type Props = {
    invoice: Invoice;
};

export function StaffMemberRecentTicketListItemActions({ invoice }: Props) {
    return (
        <div className="flex flex-col justify-end pb-2">
            <span className="font-satoshi font-bold text-xs leading-4 text-[#197BFF]">Assign</span>
        </div>
    );
}
