import { Staff } from '@/features/dashboard/types/types';
import {StaffListItem} from './staff-list-item';

type Props = {
    staff: Staff[];
};

export default function StaffList({ staff }: Props) {
    return (
        <>
            {staff.map((staff) => (
                <StaffListItem key={staff.id} staff={staff} />
            ))}
        </>
    );
}
