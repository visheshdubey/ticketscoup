import { StaffPageAddStaffButton } from './staff-page-add-staff-button';
import { StaffPageFilter } from './staff-page-filter';

type Props = {
    filtersApplied: boolean;
};

export function StaffPageActions({ filtersApplied }: Props) {
    return (
        <div className="flex gap-6">
            <StaffPageAddStaffButton />
            <StaffPageFilter filtersApplied={filtersApplied} />
        </div>
    );
}
