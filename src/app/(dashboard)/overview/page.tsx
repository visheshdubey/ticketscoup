"use client";

import Card from "@/features/dashboard/comps/card";
import SelectComponent from "@/features/dashboard/comps/select-component";
import { widgets } from "@/features/dashboard/lib/widgetsdata";

export default function Page() {
  let options = [
    { label: "Last 30 Days", value: "30days" },
    { label: "Last 60 Days", value: "60days" },
    { label: "Last 120 Days", value: "120days" },
  ];

  const handleSelectChange = (selectedValue: string) => {};
  return (
    <>
      <div className="bg-[#0057CC] md:bg-white h-full flex flex-col px-4 pt-[17px] md:px-9 md:pt-2">
        <div className="flex justify-between md:justify-start gap-5">
          <span className="font-satoshi text-white font-bold md:font-medium text-2xl leading-[34px] md:text-stone-950">
            Overview
          </span>

          <div className="">
            <SelectComponent
              options={options}
              onChange={handleSelectChange}
              className="px-0 py-0 md:px-3 md:py-2 shadow-none border-none outline-none font-satoshi font-medium text-white text-xs leading-[15px] md:text-[#A09B96] md:text-sm md:leading-[18px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 auto-rows-min md:grid-cols-4 pt-4 md:pt-6 gap-6 ">
          {widgets.map((widget, index) => (
            <div
              key={widget.title}
              className={`rounded-[20px] bg-[#236DD4] ${
                index % 2 == 0 ? "md:bg-[#E2EFFD]" : "md:bg-[#EAECFC]"
              }`}
            >
              <Card info={widget} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
