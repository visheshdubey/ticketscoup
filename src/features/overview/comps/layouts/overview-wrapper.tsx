'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ticketStatus, ticketStatusColorMap, ticketStatusMap } from '@/lib/config';

import { Button } from '@/components/ui/button';
import { Column } from '@/features/overview/comps/temporary-table-dump/generic-table';
import DashboardPageSection from '@/features/dashboard/core/comps/dashboard-page-section';
import { DashboardSectionTitle } from '@/features/dashboard/core/comps/dashboard-page-section-title';
import { EllipsisVerticalIcon } from 'lucide-react';
import { Invoice } from '@/features/dashboard/types/types';
import { ListFilterIcon } from 'lucide-react';
import MobileTable from '@/features/overview/comps/temporary-table-dump/mobile-table';
import PageTableTemplate from '@/features/overview/comps/temporary-table-dump/page-table';
import StatsCard from '@/components/cards/stats-card';
import { cn } from '@/lib/utils';
import { invoices } from '@/lib/config';
import { useIsMobileAndTab } from '@/hooks/use-mobile';
import { useState } from 'react';
import { widgets } from '@/lib/config';
import { StatsContainer } from '../stats-container';

export default function OverviewWrapper() {
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

    const renderId = (invoice: Invoice) => (
        <a href="#" className="underline underline-offset-2">
            {invoice.id}
        </a>
    );

    const renderStatus = (invoice: Invoice) => (
        <div className="flex justify-start items-center gap-2">
            <div className={cn('inline-block w-2 h-2 rounded-full', ticketStatusColorMap[invoice.status].bg)}></div>
            <div className={cn('font-medium text-sm leading-[18px]', ticketStatusColorMap[invoice.status].text)}>
                {ticketStatusMap[invoice.status]}
            </div>
        </div>
    );

    const renderAssignedTo = (invoice: Invoice) => (
        <div className="flex items-center justify-start gap-2">
            <span>{invoice.assginedTo}</span>
            {invoice.status === ticketStatus.IN_PROGRESS && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="py-3 h-4 w-4 px-3 justify-center border-none focus:!ring-0 outline-none bg-white shadow-none hover:bg-muted/50 mix-blend-multiply">
                            <EllipsisVerticalIcon size={16} className="text-[#A09B96]" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-36">
                        <DropdownMenuItem
                            className="font-satoshi text-sm text-gray-900"
                            onSelect={() => console.log('Edit', invoice.id)}
                        >
                            Assign / Resassign
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="font-satoshi text-sm text-gray-900"
                            onSelect={() => console.log('Delete', invoice.id)}
                        >
                            Change Type
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="font-satoshi text-sm text-gray-900"
                            onSelect={() => console.log('Delete', invoice.id)}
                        >
                            Cancel
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </div>
    );

    const columns: Column<Invoice>[] = [
        {
            key: 'id',
            label: 'ID',
            className:
                'w-[129px] text-sm leading-[18px] font-medium text-gray-900 pl-[19px] rounded-tl-lg rounded-bl-lg',
            render: renderId,
        },
        { key: 'client', label: 'Client', className: 'w-[194px] text-sm leading-[18px] font-medium text-gray-900' },
        { key: 'type', label: 'Type', className: 'w-[113px] text-sm leading-[18px] font-medium text-gray-900' },
        {
            key: 'status',
            label: 'Status',
            className: 'w-[113px] text-sm leading-[18px] font-medium text-gray-900',
            render: renderStatus,
        },
        {
            key: 'lastUpdated',
            label: 'Last Updated',
            className: 'w-[113px] text-sm leading-[18px] font-medium text-gray-900',
        },
        {
            key: 'assginedTo',
            label: 'Assigned To',
            className: 'w-[113px] text-sm leading-[18px] font-medium text-gray-900 rounded-tr-lg rounded-br-lg ',
            render: renderAssignedTo,
        },
    ];

    return (
        <>
            <DashboardPageSection className="bg-[#EAECFC] md:bg-white md:h-max md:pt-4 md:pb-5">
                <StatsContainer
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
                    <div className="flex justify-between items-center">
                        <DashboardSectionTitle>Recent Tickets</DashboardSectionTitle>

                        <div className="flex items-center gap-4">
                            <div className="bg-[#EAECFC] rounded-lg p-2 cursor-pointer relative">
                                <ListFilterIcon size={16} />
                                {filtersApplied && (
                                    <div className="absolute top-1 right-1 w-[5px] h-[5px] bg-[#0057CC] rounded-full" />
                                )}
                            </div>
                            <div className="hidden md:flex border border-[#CDCDCD] py-1 px-2 rounded-md">
                                <input
                                    className="border-none outline-none md:text-base md:placeholder:text-[#9F9f9f] placeholder:text-sm leading-4"
                                    placeholder="Search"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-5 hidden md:block">
                        {/* //TODO: Remove PageTable which is not being used */}
                        {/* <PageTable /> */}
                        <PageTableTemplate columns={columns} data={invoices} />
                    </div>

                    <div className="md:hidden pt-4">
                        <MobileTable />
                    </div>
                </div>
            </DashboardPageSection>
        </>
    );
}
