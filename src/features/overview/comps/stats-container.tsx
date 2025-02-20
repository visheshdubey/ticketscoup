import { Button } from '@/components/ui/button';
import { DashboardPageTitle } from '@/features/dashboard/core/comps/dashboard-page-title';
import { widgets } from '@/lib/config';
import { StatDurationSelector } from './stats-duration-selector';
import StatsCard from '@/components/cards/stats-card';

type Props = {
    handleSelectChange: (selectedValue: string) => void;
    handleShowMore: () => void;
    showMore: boolean;
    showMoreButtonInMobile: boolean;
    options: { label: string; value: string }[];
};

export function StatsContainer({
    handleSelectChange,
    handleShowMore,
    showMore,
    showMoreButtonInMobile,
    options,
}: Props) {
    const WidgetList = (widgets: { title: string; value: string; growth: string }[]) => {
        return (
            <>
                {widgets.slice(0, showMore ? widgets.length : 6).map((widget, index) => (
                    <div
                        key={widget.title}
                        className={`rounded-[20px] min-w-[155px] md:min-w-[264px] md:h-[136px]  h-[92px] bg-white 
                      ${index % 2 == 0 ? 'md:bg-[#E2EFFD]' : 'md:bg-[#EAECFC]'}
                    `}
                    >
                        <StatsCard info={widget} />
                    </div>
                ))}
            </>
        );
    };

    return (
        <>
            <div className="flex justify-between md:justify-start gap-5">
                <DashboardPageTitle>Overview</DashboardPageTitle>
                <StatDurationSelector options={options} handleSelectChange={handleSelectChange} />
            </div>
            <div className="grid grid-cols-1 2xs:grid-cols-2 auto-rows-min md:flex md:flex-wrap pt-4 md:pt-6 gap-4">
                {WidgetList(widgets)}
            </div>
            {showMoreButtonInMobile && (
                <div className="flex justify-center items-center ">
                    <Button
                        variant={'link'}
                        onClick={handleShowMore}
                        className="pt-4 pb-3 font-satoshi !no-underline !underline-offset-0 font-medium text-xs leading-[17px] text-[#197BFF]"
                    >
                        {showMore ? 'Show Less' : 'Show More'}
                    </Button>
                </div>
            )}
        </>
    );
}
