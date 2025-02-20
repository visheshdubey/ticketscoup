import { ReactNode } from 'react';

type DashboardHeaderProps = {
    children?: ReactNode;
};

export default function DashboardHeader({ children }: DashboardHeaderProps) {
    return (
        <header className="flex bg-white md:rounded-tl-3xl px-4 py-2 md:px-9 md:py-6 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            {children}
        </header>
    );
}
