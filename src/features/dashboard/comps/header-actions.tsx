import UserAvatar from './avatar';
import { PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NotificationBell } from './notification-bell';

const HeaderActions = ({ hasNotifications, isMobile }: { hasNotifications: boolean; isMobile: boolean }) => (
    <div className="flex items-center gap-5 md:gap-10">
        <Button
            size={'default'}
            className="rounded-lg font-satoshi md:flex hidden bg-[#197BFF] !text-white hover:!bg-[#63a4f9]"
        >
            New <PlusIcon size={16} />
        </Button>

        <NotificationBell hasNotifications={hasNotifications} isMobile={isMobile} />

        <div className="flex items-center justify-center hover:cursor-pointer">
            <UserAvatar initials="VM" />
        </div>
    </div>
);

export default HeaderActions;
