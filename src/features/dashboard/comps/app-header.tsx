import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Bell, BellDotIcon, PlusIcon } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useDeviceType } from "../hooks/useMediaquery";
import { usePathname } from "next/navigation";
import { pageTitleMap } from "../lib/mapper";
import { PageKey } from "../types/types";

type AppHeaderProps = {
  data: {};
  hasNotifications: boolean;
};

export default function AppHeader({ data, hasNotifications }: AppHeaderProps) {
  const isMobile = useDeviceType();
  const pathName = usePathname().slice(1);
  const pageBreadcrumbTitle = pageTitleMap[pathName as PageKey];

  

  return (
    <>
      <header className="flex md:border-none border border-b-[#EFF6FF] border-solid bg-white md:rounded-tl-[20px] px-4 py-2 md:px-9 md:py-6 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div
          style={{ justifyContent: "space-between" }}
          className="flex items-center w-full"
        >
          <div className="flex items-center gap-3 md:gap-4">
            <SidebarTrigger className="-ml-1" />

            <Breadcrumb>
              <BreadcrumbList style={{ gap: "1rem" }}>
                <BreadcrumbSeparator className="hidden md:block" />

                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbPage
                    className={`hidden md:block font-satoshi text-[#A09B96]`}
                  >
                    {pageBreadcrumbTitle}
                  </BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbItem className="md:hidden block">
                  <BreadcrumbPage className="md:hidden font-satoshi font-medium text-base text-gray-900 leading-[23px]">
                    VishalMadanCA
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-5 md:gap-10">
            <Button
              variant={"primary"}
              size={"default"}
              className="rounded-lg font-satoshi md:flex hidden"
            >
              New <PlusIcon size={16} />
            </Button>

            <div className="hover:cursor-pointer">
              {hasNotifications ? (
                <BellDotIcon size={isMobile ? 17 : 24}>
                  <circle
                    cx="18"
                    cy="8"
                    r="3"
                    fill="#197BFF"
                    stroke="#197BFF"
                    className="lucid-bell-dot"
                  />
                </BellDotIcon>
              ) : (
                <Bell size={isMobile ? 17 : 24} />
              )}
            </div>

            <div
              className="flex items-center
            bg-slate-800 aspect-square h-9 w-9 rounded-full shrink-0 grow-0 hover:cursor-pointer "
            ></div>
          </div>
        </div>
      </header>
    </>
  );
}
