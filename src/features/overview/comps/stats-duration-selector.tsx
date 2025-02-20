import SelectComponent from '@/components/select-component';
import { cn } from '@/lib/utils';

type Props = {
    options: { label: string; value: string }[];
    handleSelectChange: (selectedValue: string) => void;
    className?: string;
};

export function StatDurationSelector({ options, handleSelectChange, className }: Props) {
    return (
        <div>
            <SelectComponent
                options={options}
                onChange={handleSelectChange}
                className={cn(
                    'px-0 py-0 md:px-3 md:py-2 shadow-none border-none outline-none font-satoshi font-medium text-xs leading-[15px] text-[#A09B96] md:text-sm md:leading-[18px]',
                    className
                )}
            />
        </div>
    );
}
