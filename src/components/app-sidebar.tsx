"use client";

import * as React from "react";
import { AudioWaveform, Command } from "lucide-react";

import Image from "next/image";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { getMenuList } from "@/lib/menu-list";

const navMain = getMenuList("/");

const data = {
  user: {
    name: "VishalMadanCA",
    email: "vishalmadanCA@example.com",
    avatar: "/company-logo.svg",
  },
  teams: [
    {
      name: "VishalMadanCA",
      logo: () => (
        <Image src="/company-logo.svg" alt="My Icon" width={32} height={32} />
      ),
      plan: "Visit Site",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className={`pt-6 ${open ? "pl-[25px] pr-[22px]" : ""} font-satoshi`}>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain.items} groupLabel={navMain.groupLabel} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
