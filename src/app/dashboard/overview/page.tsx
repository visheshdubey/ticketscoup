"use client";

import { Button } from "@/components/ui/button";
import Card from "@/features/dashboard/comps/card";
import SelectComponent from "@/features/dashboard/comps/select-component";
import { widgets } from "@/features/dashboard/lib/widgetsdata";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

export default function Page() {
  let options = [
    { label: "Last 30 Days", value: "30days" },
    { label: "Last 60 Days", value: "60days" },
    { label: "Last 120 Days", value: "120days" },
  ];

  const isMobile = useIsMobile();
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleSelectChange = (selectedValue: string) => {};
  return (
    <>
      <div className="bg-[#EAECFC] md:bg-white md:h-full flex flex-col px-4 pt-[17px] pb-3 md:px-9 md:pt-2">
        <div className="flex justify-between md:justify-start gap-5">
          <span className="font-satoshi font-medium text-2xl leading-[34px] text-stone-950">
            Overview
          </span>

          <div className="">
            <SelectComponent
              options={options}
              onChange={handleSelectChange}
              className="px-0 py-0 md:px-3 md:py-2 shadow-none border-none outline-none font-satoshi font-medium text-xs leading-[15px] text-[#A09B96] md:text-sm md:leading-[18px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 auto-rows-min md:flex md:flex-wrap pt-4 md:pt-6 gap-4">
          {widgets
            .slice(0, showMore ? widgets.length : 6)
            .map((widget, index) => (
              <div
                key={widget.title}
                className={`rounded-[20px] min-w-[155px] md:min-w-[264px] md:h-[136px]  h-[92px] bg-white 
                  ${index % 2 == 0 ? "md:bg-[#E2EFFD]" : "md:bg-[#EAECFC]"}
                `}
              >
                <Card info={widget} />
              </div>
            ))}
        </div>
        {isMobile && widgets.length > 4 && (
          <div className="flex justify-center items-center ">
            <Button
              variant={"link"}
              onClick={handleShowMore}
              className="pt-4 pb-3 font-satoshi !no-underline !underline-offset-0 font-medium text-xs leading-[17px] text-[#197BFF]"
            >
              {showMore ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
