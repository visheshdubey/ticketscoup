"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { sidebarElementsMap } from "../lib/mapper";
import { PageKey } from "../types/types";

export function NavMain({
  items,
  groupLabel,
}: {
  items: {
    title: string;
    url?: string;
    icon?: LucideIcon;
    isActive?: boolean;
    requiredRoleAny?: string[];
    items?: {
      title: string;
      url: string;
      requiredRoleAny?: string[];
    }[];
  }[];
  groupLabel: string;
}) {
  const { open } = useSidebar();
  const userRole = "ADMIN";
  const selectedItem =
    sidebarElementsMap[usePathname().split("/").pop() as PageKey];

  return (
    <SidebarGroup
      className={`${open ? "pl-[25px] pr-[22px]" : ""} font-satoshi`}
    >
      <SidebarGroupLabel className="uppercase font-bold text-xs text-[#A09B96] leading-[17px]">
        {groupLabel}
      </SidebarGroupLabel>
      <SidebarMenu className="pt-4 gap-1.5">
        {items.map((item) =>
          item.items &&
          item.items.length > 0 &&
          item.requiredRoleAny?.includes(userRole) ? (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible data-[state=open]:border-l-0"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild className="">
                  <SidebarMenuButton tooltip={item.title}>
                    <div className="flex [&>svg]:size-4 [&>svg]:shrink-0 space-x-4 items-center">
                      <div className="flex -ml-0.5">
                        {item.icon && (
                          <item.icon
                            strokeWidth={1.75}
                            width={20}
                            height={20}
                          />
                        )}
                      </div>
                      <span>{item.title}</span>
                    </div>

                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden transition-all duration-300 data-[state=open]:animate-expand data-[state=closed]:animate-collapse">
                  <SidebarMenuSub className="px-5 pt-3.5 border-l-0">
                    {item.items?.map(
                      (subItem) =>
                        subItem.requiredRoleAny?.includes(userRole) && (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        )
                    )}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            item.requiredRoleAny?.includes(userRole) && (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className="!p-[0.4rem]"
                >
                  <a
                    href={item.url}
                    className={`flex items-center space-x-2 ${
                      selectedItem === item.title ? "text-white" : ""
                    }`}
                  >
                    <div className="flex -ml-0.5">
                      {item.icon && (
                        <item.icon strokeWidth={1.75} width={20} height={20} />
                      )}
                    </div>
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
