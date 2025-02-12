import { cn } from '@/lib/utils';

type PageSubheadingProps = {
    title: string;
    className?: string;
};

export const PageSubHeading = ({ title, className }: PageSubheadingProps) => {
    return (
        <span className={cn('font-satoshi font-medium text-2xl leading-[34px] md:text-xl text-gray-900', className)}>
            {title}
        </span>
    );
};
