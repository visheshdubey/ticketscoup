import { ClientsPageAddStaffButton } from './clients-page-add-staff-button';
import { ClientsPageFilter } from './clients-page-filter';

type Props = {
    filtersApplied: boolean;
};

export function ClientsPageActions({ filtersApplied }: Props) {
    return (
        <div className="flex gap-6">
            <ClientsPageAddStaffButton />
            <ClientsPageFilter filtersApplied={filtersApplied} />
        </div>
    );
}
