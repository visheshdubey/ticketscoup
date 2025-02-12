type DashboardTitleProps = {
    title: string;
};

export const DashboardPageTitle = ({ title }: DashboardTitleProps) => {
    return <span className="font-satoshi font-medium text-2xl leading-[34px] text-stone-950">{title}</span>;
};
