type DashboardTitleProps = {
    children: string;
};

export const DashboardSectionTitle = ({ children }: DashboardTitleProps) => {
    return <h2 className="font-satoshi font-medium text-2xl leading-[34px] md:text-xl text-gray-900">{children}</h2>;
};
