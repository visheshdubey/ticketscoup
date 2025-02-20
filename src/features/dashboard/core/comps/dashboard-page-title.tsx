import { cn } from '@/lib/utils';

type DashboardTitleProps = {
    children: string;
    className?: string;
};

export const DashboardPageTitle = ({ children, className }: DashboardTitleProps) => {
    return (
        <span className={cn('font-satoshi font-medium text-2xl leading-[34px] text-stone-950', className)}>
            {children}
        </span>
    );
};
