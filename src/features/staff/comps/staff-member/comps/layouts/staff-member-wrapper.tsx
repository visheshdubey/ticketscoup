'use client';

import DashboardPageSection from '@/features/dashboard/core/comps/dashboard-page-section';
import StatsCard from '@/components/cards/stats-card';
import { cn } from '@/lib/utils';
import { invoices } from '@/lib/config';
import { useIsMobileAndTab } from '@/hooks/use-mobile';
import { useState } from 'react';
import { widgets } from '@/lib/config';
import { StaffMemberStatsContainer } from '../staff-member-stats-container';
import { StaffMemberRecentTicketTableHeader } from '../staff-member-recent-ticket-table-header';
import StaffMemberRecentTicketTable from '../staff-member-recent-ticket-table';
import StaffMemberRecentTicketList from '../staff-member-recent-ticket-list';

export default function StaffMemberWrapper() {
    const [searchItem, setSearchItem] = useState('');
    const isMobileAndTab = useIsMobileAndTab();
    const [showMore, setShowMore] = useState(false);
    const showMoreButtonInMobile = isMobileAndTab && widgets.length > 0;

    let filtersApplied = true;
    let options = [
        { label: 'Last 30 Days', value: '30days' },
        { label: 'Last 60 Days', value: '60days' },
        { label: 'Last 120 Days', value: '120days' },
    ];

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(e.target.value);
    };

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    const WidgetList = (widgets: { title: string; value: string; growth: string }[]) => {
        return (
            <>
                {widgets.slice(0, showMore ? widgets.length : 6).map((widget, index) => (
                    <div
                        key={widget.title}
                        className={cn(
                            'rounded-2.5xl min-w-[155px] h-[92px] md:min-w-[264px] md:h-[136px] bg-white',
                            index % 2 === 0 ? 'md:bg-[#E2EFFD]' : 'md:bg-[#EAECFC]'
                        )}
                    >
                        <StatsCard info={widget} />
                    </div>
                ))}
            </>
        );
    };

    const handleSelectChange = (selectedValue: string) => {};

    return (
        <>
            <DashboardPageSection className="bg-[#EAECFC] md:bg-white md:h-max md:pt-4 md:pb-5">
                <StaffMemberStatsContainer
                    WidgetList={WidgetList}
                    handleSelectChange={handleSelectChange}
                    handleShowMore={handleShowMore}
                    showMore={showMore}
                    showMoreButtonInMobile={showMoreButtonInMobile}
                    options={options}
                />
            </DashboardPageSection>
            <DashboardPageSection>
                <div className="bg-white md:h-full flex flex-col mt-10 lg:mt-2">
                    <StaffMemberRecentTicketTableHeader filtersApplied={filtersApplied} />

                    <div className="pt-5 hidden md:block">
                        <StaffMemberRecentTicketTable invoices={invoices} />
                    </div>

                    <div className="md:hidden pt-4">
                        <StaffMemberRecentTicketList invoices={invoices} />
                    </div>
                </div>
            </DashboardPageSection>
        </>
    );
}
