import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Invoice } from '@/features/dashboard/types/types';
import { ticketStatus } from '@/lib/config';
import { EllipsisVerticalIcon } from 'lucide-react';

type Props = {
    invoice: Invoice;
};

export function StaffMemberRecentTicketTableRowActions({ invoice }: Props) {
    return (
        <div className="flex items-center justify-start gap-2">
            <span>{invoice.assginedTo}</span>
            {invoice.status === ticketStatus.IN_PROGRESS && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="py-3 h-4 w-4 px-3 justify-center border-none focus:!ring-0 outline-none bg-white shadow-none hover:bg-muted/50 mix-blend-multiply">
                            <EllipsisVerticalIcon size={16} className="text-[#A09B96]" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-36">
                        <DropdownMenuItem
                            className="font-satoshi text-sm text-gray-900"
                            onSelect={() => console.log('Edit', invoice.id)}
                        >
                            Assign / Resassign
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="font-satoshi text-sm text-gray-900"
                            onSelect={() => console.log('Delete', invoice.id)}
                        >
                            Change Type
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="font-satoshi text-sm text-gray-900"
                            onSelect={() => console.log('Delete', invoice.id)}
                        >
                            Cancel
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </div>
    );
}
