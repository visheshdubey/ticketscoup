import { ListFilterIcon } from 'lucide-react';

type Props = {
    filtersApplied: boolean;
};

export function ClientRecentTicketTableFilter({ filtersApplied }: Props) {
    return (
        <div className="bg-[#EAECFC] rounded-lg p-2 cursor-pointer relative">
            <ListFilterIcon size={16} />
            {filtersApplied && <div className="absolute top-1 right-1 w-[5px] h-[5px] bg-[#0057CC] rounded-full" />}
        </div>
    );
}
