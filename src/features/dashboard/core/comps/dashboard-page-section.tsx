import { cn } from '@/lib/utils';

type Props = {};

const DashboardPageSection: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return (
        <section
            {...props}
            className={cn('bg-white md:h-full flex flex-col px-4 pt-4 md:px-9 md:pt-2', props.className)}
        >
            {props.children}
        </section>
    );
};

export default DashboardPageSection;
