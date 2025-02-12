import { cn } from '@/lib/utils';

type SearchProps = {
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

export function Search({ onSearch, className }: SearchProps) {
    return (
        <>
            <div className={cn('hidden md:flex border border-[#CDCDCD] py-1 px-2 rounded-md', className)}>
                <input
                    className="border-none outline-none md:text-base md:placeholder:text-[#9F9f9f] placeholder:text-sm leading-4"
                    placeholder="Search"
                    onChange={onSearch}
                />
            </div>
        </>
    );
}
