import { TrendingUp } from "lucide-react";
import { WidgetCardProps } from "../types/types";

export default function Card({ info }: WidgetCardProps) {
  const { title, value, growth } = info;

  return (
    <>
      <div className="flex flex-col justify-start items-start rounded-[20px] py-4 px-3 md:py-8 md:px-6">
        <div className="flex font-satoshi font-medium text-xs leading-5 md:text-base md:leading-5 text-white md:text-gray-900 w-full">
          {title}
        </div>

        <div className="flex w-full justify-between items-center pt-1 md:pt-4">
          <div className="flex font-clashGrotesk text-2xl font-semibold md:text-[36px] leading-9 text-white md:text-gray-900">
            {value}
          </div>
          <div className="flex gap-2 items-center text-white md:text-gray-900">
            <div className="font-satoshi font-medium text-[11px] md:text-[13px] leading-7 ">
              {growth}
            </div>
            <TrendingUp size={16} />
          </div>
        </div>
      </div>
    </>
  );
}
