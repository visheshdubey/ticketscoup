'use client';

import { Bell, BellDotIcon, PlusIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useDeviceType } from '@/features/dashboard/hooks/useMediaquery';

const PageHeaderActions = ({ hasNotifications }: { hasNotifications: boolean }) => {
    const isMobile = useDeviceType();

    return (
        <div className="flex items-center gap-5 md:gap-8">
            <div className="hover:cursor-pointer">
                {hasNotifications ? (
                    <BellDotIcon size={isMobile ? 16 : 20}>
                        <circle cx="18" cy="8" r="3" fill="#197BFF" stroke="#197BFF" className="lucid-bell-dot" />
                    </BellDotIcon>
                ) : (
                    <Bell size={isMobile ? 16 : 20} />
                )}
            </div>
            <Button
                size={'sm'}
                className="rounded-lg font-satoshi md:flex hidden bg-[#197BFF] !text-white hover:!bg-[#63a4f9]"
            >
                New <PlusIcon size={16} />
            </Button>
        </div>
    );
};

export default PageHeaderActions;
