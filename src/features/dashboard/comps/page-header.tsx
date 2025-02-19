import BreadcrumbComponent from '@/components/breadcrumb';
import DashboardHeader from '../core/comps/dashboard-header';
import PageHeaderActions from './page-header-actions';
import { SidebarTrigger } from '@/components/ui/sidebar';

type Props = {
    hasNotifications: boolean;
    pageBreadcrumbTitle: string;
};

const PageHeader = ({ hasNotifications, pageBreadcrumbTitle }: Props) => {
    return (
        <DashboardHeader>
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3 md:gap-4">
                    <SidebarTrigger className="-ml-1" />
                    <BreadcrumbComponent pageBreadcrumbTitle={pageBreadcrumbTitle} />
                </div>
                <PageHeaderActions hasNotifications={hasNotifications} />
            </div>
        </DashboardHeader>
    );
};

export default PageHeader;
