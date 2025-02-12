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
                'bg-[#EAECFC] md:bg-white h-full flex flex-col px-4 pt-[17px] pb-3 md:px-9 md:pt-2',
                props.className
            )}
        >
            <div className="flex justify-between md:justify-start gap-5 h-full">
                {props.title && <DashboardTitle title={props.title} />}
                {props.children}
            </div>
        </main>
    );
};

export default DashboardContent;
