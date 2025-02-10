'use client';

import { Button } from '@/components/ui/button';
import Card from '@/components/cards/stat-card';
import { DashboardTitle } from '@/features/dashboard/comps/dashboard-title';
import SelectComponent from '@/components/select-component';
import { widgets } from '@/lib/config';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState } from 'react';
import { ListFilterIcon } from 'lucide-react';
import PageTable from '@/features/dashboard/comps/table';
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

export default function OverviewPage() {
    const [searchItem, setSearchItem] = useState('');
    const isMobile = useIsMobile();
    const [showMore, setShowMore] = useState(false);
    const showMoreButtonInMobile = isMobile && widgets.length > 0;

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
                        className={`rounded-[20px] min-w-[155px] md:min-w-[264px] md:h-[136px]  h-[92px] bg-white 
                  ${index % 2 == 0 ? 'md:bg-[#E2EFFD]' : 'md:bg-[#EAECFC]'}
                `}
                    >
                        <Card info={widget} />
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
            <div className="bg-[#EAECFC] md:bg-white md:h-full flex flex-col px-4 pt-[17px] md:px-9 md:pt-2">
                <div className="flex justify-between md:justify-start gap-5">
                    <DashboardTitle title="Overview" />

                    <div>
                        <SelectComponent
                            options={options}
                            onChange={handleSelectChange}
                            className="px-0 py-0 md:px-3 md:py-2 shadow-none border-none outline-none font-satoshi font-medium text-xs leading-[15px] text-[#A09B96] md:text-sm md:leading-[18px]"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 auto-rows-min md:flex md:flex-wrap pt-4 md:pt-6 gap-4">
                    {WidgetList(widgets)}
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
                <div className="flex justify-between items-center  ">
                    <span className="font-satoshi font-medium text-2xl leading-[34px] md:text-xl text-gray-900">
                        Recent Tickets
                    </span>
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
        </>
    );
}
