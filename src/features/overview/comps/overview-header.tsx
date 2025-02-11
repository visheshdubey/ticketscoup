import { PageTitle } from '@/components/typography/page-title';
import SelectComponent, { Option } from '@/components/select-component';

type OverviewPageHeaderProps = {
    options: Option[];
    handleSelectChange: (value: string) => void;
};

export const OverviewPageHeader = ({ options, handleSelectChange }: OverviewPageHeaderProps) => {
    return (
        <>
            <div className="flex justify-between md:justify-start gap-5">
                <PageTitle title="Overview" />

                <div>
                    <SelectComponent
                        options={options}
                        onChange={handleSelectChange}
                        className="px-0 py-0 md:px-3 md:py-2 shadow-none border-none outline-none font-satoshi font-medium text-xs leading-[15px] text-[#A09B96] md:text-sm md:leading-[18px]"
                    />
                </div>
            </div>
        </>
    );
};
