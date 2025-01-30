import { TrendingUp } from "lucide-react";
import { WidgetCardProps } from "../types/cardtype";

export default function Card({ info }: WidgetCardProps) {
  const { title, value, growth } = info;
  return (
    <>
      <div className="flex justify-between items-end rounded-[20px] py-8 px-6">
        <div className="flex flex-col justify-between gap-4">
          <div className="font-satoshi font-medium md:text-base md:leading-5 text-gray-900 w-full">
            {title}
          </div>
          <div className="font-clashGrotesk font-semibold md:text-[36px] md:leading-9 text-gray-900">
            {value}
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="font-satoshi font-medium md:text-[13px] md:leading-7 text-gray-900">
            {growth}
          </div>
          <TrendingUp size={16} />
        </div>
      </div>
    </>
  );
}
