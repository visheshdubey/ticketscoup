"use client";

import Card from "@/features/dashboard/comps/card";
import { widgets } from "@/features/dashboard/lib/widgetsdata";

export default function Page() {
  return (
    <>
      <div className="bg-white h-full flex flex-col px-9 pt-2">
        <div className="flex gap-5">
          <span className="font-satoshi font-medium text-2xl leading-[34px] text-stone-950">
            Overview
          </span>

          <div className=""></div>
        </div>

        <div className="grid auto-rows-min md:grid-cols-4 pt-6 gap-6 px">
          {widgets.map((widget, index) => (
            <div
              key={widget.title}
              className={`rounded-[20px] ${
                index % 2 == 0 ? "bg-[#E2EFFD]" : "bg-[#EAECFC]"
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
