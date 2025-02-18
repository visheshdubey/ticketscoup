import { DashboardTitle } from './dashboard-title';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
    children: ReactNode;
    title?: string;
    className?: string;
};

const DashboardContent = (props: Props) => {
    return (
        <main
            className={cn(
                'bg-[#EAECFC] w-full p-0 lg:bg-white h-full flex flex-col lg:pb-3 lg:pl-9 lg:pt-2 ',
                props.className
            )}
        >
            <div className="flex justify-between lg:justify-start gap-5 w-full h-full">
                {props.title && <DashboardTitle>{props.title}</DashboardTitle>}
                {props.children}
            </div>
        </main>
    );
};

export default DashboardContent;
