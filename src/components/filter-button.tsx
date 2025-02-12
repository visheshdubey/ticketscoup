import { ListFilterIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type FilterButtonProps = {
    filtersApplied: boolean;
    className?: string;
};

export function FilterButton({ filtersApplied, className }: FilterButtonProps) {
    return (
        <>
            <div className={cn('bg-[#EAECFC] rounded-lg p-2 cursor-pointer relative', className)}>
                <ListFilterIcon size={16} />
                {filtersApplied && <div className="absolute top-1 right-1 w-[5px] h-[5px] bg-[#0057CC] rounded-full" />}
            </div>
        </>
    );
}
