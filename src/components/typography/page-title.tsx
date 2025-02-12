import { cn } from '@/lib/utils';

type PageTitleProps = {
    title: string;
    className?: string;
};

export const PageTitle = ({ title, className }: PageTitleProps) => {
    return (
        <span className={cn('font-satoshi font-medium text-2xl leading-[34px] text-stone-950', className)}>
            {title}
        </span>
    );
};
