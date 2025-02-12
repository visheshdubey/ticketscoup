import { Bell, BellDotIcon } from 'lucide-react';

type NotificationBellProps = {
    hasNotifications: boolean;
    isMobile: boolean;
};

export function NotificationBell({ hasNotifications, isMobile }: NotificationBellProps) {
    return (
        <>
            <div className="hover:cursor-pointer">
                {hasNotifications ? (
                    <BellDotIcon size={isMobile ? 17 : 24}>
                        <circle cx="18" cy="8" r="3" fill="#197BFF" stroke="#197BFF" className="lucid-bell-dot" />
                    </BellDotIcon>
                ) : (
                    <Bell size={isMobile ? 17 : 24} />
                )}
            </div>
        </>
    );
}
