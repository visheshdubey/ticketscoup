import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';

export function StaffPageAddStaffButton() {
    return (
        <>
            <Button
                size={'sm'}
                className="rounded-lg font-satoshi border transition-colors border-[#197BFF] font-medium text-sm !px-4 !py-2 md:flex hidden bg-white !text-[#197BFF] hover:!bg-[#197BFF] hover:!text-white"
            >
                New Staff
                <PlusIcon size={14} />
            </Button>
        </>
    );
}
