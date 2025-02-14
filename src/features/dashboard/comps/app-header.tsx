import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useDeviceType } from '@/features/dashboard/hooks/useMediaquery';
import { usePathname } from 'next/navigation';
import { pageTitleMap } from '@/lib/config';
import { PageKey } from '@/lib/config';
import HeaderActions from './header-actions';
import BreadcrumbComponent from '@/components/breadcrumb';

type AppHeaderProps = {
    hasNotifications: boolean;
};

export default function AppHeader({ hasNotifications }: AppHeaderProps) {
    const isMobile = useDeviceType();
    const pathName = usePathname().split('/').pop();
    const pageBreadcrumbTitle = pageTitleMap[pathName as PageKey];

    return (
        <>
            <header className="z-10 flex md:border-none border border-b-[#EFF6FF] border-solid bg-white md:rounded-tl-[20px] px-4 py-2 md:px-9 md:py-6 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div style={{ justifyContent: 'space-between' }} className="flex items-center w-full">
                    <div className="flex items-center gap-3 md:gap-4">
                        <SidebarTrigger className="-ml-1" />
                        <BreadcrumbComponent pageBreadcrumbTitle={pageBreadcrumbTitle} />
                    </div>
                    <HeaderActions hasNotifications={hasNotifications} isMobile={isMobile} />
                </div>
            </header>
        </>
    );
}
