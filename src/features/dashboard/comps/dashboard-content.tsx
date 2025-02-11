import { DashboardTitle } from './dashboard-title';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    title?: string;
};

const DashboardContent = (props: Props) => {
    return (
        <main className="bg-[#EAECFC] md:bg-white md:h-full flex flex-col px-4 pt-[17px] pb-3 md:px-9 md:pt-2">
            <div className="flex justify-between md:justify-start gap-5">
                {props.title && <DashboardTitle title={props.title} />}
                {props.children}
            </div>
        </main>
    );
};

export default DashboardContent;
