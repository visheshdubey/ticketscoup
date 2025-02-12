type DashboardTitleProps = {
    children: string;
};

export const DashboardTitle = ({ children }: DashboardTitleProps) => {
    return <span className="font-satoshi font-medium text-2xl leading-[34px] text-stone-950">{children}</span>;
};
