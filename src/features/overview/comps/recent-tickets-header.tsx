import { FilterButton } from '@/components/filter-button';
import { Search } from '@/components/search';
import { PageSubHeading } from '@/components/typography/page-subheading';

type RecentTicketsProps = {
    filtersApplied: boolean;
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RecentTicketsHeader = ({ filtersApplied, onSearch }: RecentTicketsProps) => {
    return (
        <>
            <div className="flex justify-between items-center ">
                <PageSubHeading title="Recent Tickets" />

                <div className="flex items-center gap-4">
                    <FilterButton filtersApplied={filtersApplied} />
                    <Search onSearch={onSearch} />
                </div>
            </div>
        </>
    );
};
