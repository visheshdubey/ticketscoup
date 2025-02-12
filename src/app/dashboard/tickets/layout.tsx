'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import DashboardContent from '@/features/dashboard/comps/dashboard-content';
import { DashboardTitle } from '@/features/dashboard/comps/dashboard-title';
import Link from 'next/link';
import { useEffect } from 'react';
import { useSidebar } from '@/components/ui/sidebar';

type Props = { children: React.ReactNode };

const TicketsPage = (props: Props) => {
    const { setOpen } = useSidebar();

    useEffect(() => {
        setOpen(false);
    }, []);

    return (
        <DashboardContent className="pb-0 md:pr-0">
            <div className="flex w-full h-full border-t">
                <div className="w-1/4 shrink-0 max-w-xs h-full pr-4 border-r flex flex-col pt-2 gap-4">
                    <DashboardTitle>Ticket Chat</DashboardTitle>
                    <div className="flex flex-col gap-3">
                        <div className="w-full h-9 text-sm border rounded-md flex items-center px-4">Search</div>
                        <div className="flex divide-y flex-col gap-1">
                            <Link href={'/dashboard/tickets/1'} className="flex relative items-center gap-3 py-1.5">
                                <Avatar className="size-8">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <span className="font-satoshi text-sm font-semibold">Vishesh Dubey</span>
                                    <div className="flex gap-2 items-center">
                                        <div className="flex gap-1  items-center text-muted-foreground text-xs">
                                            <span className="size-2 bg-green-500 rounded-full" />
                                            In-Progress
                                        </div>
                                        <div className="flex gap-1 items-center text-muted-foreground text-xs">GST</div>
                                    </div>
                                </div>

                                <div className="bg-blue-500 absolute right-2 size-5 text-xs flex items-center justify-center font-semibold text-primary-foreground rounded-md">
                                    22
                                </div>
                            </Link>
                            <Link href={'/dashboard/tickets/1'} className="flex relative items-center gap-3 py-1.5">
                                <Avatar className="size-8">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <span className="font-satoshi text-sm font-semibold">Vishesh Dubey</span>
                                    <div className="flex gap-2 items-center">
                                        <div className="flex gap-1  items-center text-muted-foreground text-xs">
                                            <span className="size-2 bg-green-500 rounded-full" />
                                            In-Progress
                                        </div>
                                        <div className="flex gap-1 items-center text-muted-foreground text-xs">GST</div>
                                    </div>
                                </div>

                                <div className="bg-blue-500 absolute right-2 size-5 text-xs flex items-center justify-center font-semibold text-primary-foreground rounded-md">
                                    22
                                </div>
                            </Link>
                            <Link href={'/dashboard/tickets/1'} className="flex relative items-center gap-3 py-1.5">
                                <Avatar className="size-8">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="flex flex-col">
                                    <span className="font-satoshi text-sm font-semibold">Vishesh Dubey</span>
                                    <div className="flex gap-2 items-center">
                                        <div className="flex gap-1  items-center text-muted-foreground text-xs">
                                            <span className="size-2 bg-green-500 rounded-full" />
                                            In-Progress
                                        </div>
                                        <div className="flex gap-1 items-center text-muted-foreground text-xs">GST</div>
                                    </div>
                                </div>

                                <div className="bg-blue-500 absolute right-2 size-5 text-xs flex items-center justify-center font-semibold text-primary-foreground rounded-md">
                                    22
                                </div>
                            </Link>{' '}
                        </div>
                    </div>
                </div>
                {props.children}
            </div>
        </DashboardContent>
    );
};

export default TicketsPage;
