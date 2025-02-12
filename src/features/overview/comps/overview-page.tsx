'use client';

import { Button } from '@/components/ui/button';
import { widgets } from '@/lib/config';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState } from 'react';
import PageTableTemplate from '@/features/dashboard/comps/page-table';
import MobileTable from '@/features/dashboard/comps/mobile-table';
import { cn } from '@/lib/utils';
import { ticketStatus, ticketStatusColorMap, ticketStatusMap } from '@/lib/config';
import { EllipsisVerticalIcon } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Column } from '@/features/dashboard/comps/generic-table';
import { Invoice } from '@/features/dashboard/types/types';
import { invoices } from '@/lib/config';
import { options } from '@/constants/index';
import { WidgetList } from '@/features/overview/comps/widget-list';
import { OverviewPageHeader } from './overview-header';
import { RecentTicketsHeader } from './recent-tickets-header';

export default function Overview() {
    const [searchItem, setSearchItem] = useState('');
    const isMobile = useIsMobile();
    const [showMore, setShowMore] = useState(false);
    const showMoreButtonInMobile = isMobile && widgets.length > 0;

    let filtersApplied = true;

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(e.target.value);
    };

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    const handleSelectChange = (selectedValue: string) => {
        // TODO: Implement select function with api call
    };

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
            <div className="bg-[#EAECFC] md:bg-white md:h-full flex flex-col px-4 pt-[17px] md:px-9 md:pt-2">
                <OverviewPageHeader options={options} handleSelectChange={handleSelectChange} />

                <div className="grid grid-cols-2 auto-rows-min md:flex md:flex-wrap pt-4 md:pt-6 gap-4">
                    <WidgetList showMore={showMore} widgets={widgets} />
                </div>
                {showMoreButtonInMobile && (
                    <div className="flex justify-center items-center ">
                        <Button
                            variant={'link'}
                            onClick={handleShowMore}
                            className="pt-4 pb-3 font-satoshi !no-underline !underline-offset-0 font-medium text-xs leading-[17px] text-[#197BFF]"
                        >
                            {showMore ? 'Show Less' : 'Show More'}
                        </Button>
                    </div>
                )}
            </div>
            <div className="bg-white md:h-full flex flex-col px-4  pb-3 md:px-9 pt-6 md:pt-9">
                <RecentTicketsHeader filtersApplied={filtersApplied} onSearch={handleSearch} />

                <div className="pt-5 hidden md:block">
                    <PageTableTemplate columns={columns} data={invoices} />
                </div>

                <div className="md:hidden pt-4">
                    <MobileTable />
                </div>
            </div>
        </>
    );
}
