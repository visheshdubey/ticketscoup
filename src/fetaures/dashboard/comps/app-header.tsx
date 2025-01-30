import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Bell, BellDotIcon, PlusIcon } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

type AppHeaderProps = {
  hasNotifications: boolean;
};

export default function AppHeader({ hasNotifications }: AppHeaderProps) {
  return (
    <>
      <header
        style={{
          padding: "1.5rem 2.25rem",
        }}
        className="flex bg-white rounded-tl-[20px] px-9 py-6 rounded-l-[20px] h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
      >
        <div
          style={{ justifyContent: "space-between" }}
          className="flex items-center w-full"
        >
          <div className="flex items-center gap-4">
            <SidebarTrigger className="-ml-1" />

            <Breadcrumb>
              <BreadcrumbList style={{ gap: "1rem" }}>
                <BreadcrumbSeparator className="hidden md:block" />

                <BreadcrumbItem>
                  <BreadcrumbPage className={`font-satoshi text-[#A09B96]`}>
                    Overview
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center" style={{ gap: "40px" }}>
            <Button
              variant={"primary"}
              size={"default"}
              className="rounded-lg font-satoshi"
            >
              New <PlusIcon size={16} />
            </Button>

            <div className="hover:cursor-pointer">
              {hasNotifications ? (
                <BellDotIcon>
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
                <Bell />
              )}
            </div>

            <div
              style={{backgroundColor:"gray"}}
              className="flex items-center bg-slate-800 aspect-square h-9 w-9 rounded-full shrink-0 grow-0 hover:cursor-pointer "
            ></div>
          </div>
        </div>
      </header>
    </>
  );
}
