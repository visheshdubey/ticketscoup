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
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { getMenuList } from "@/lib/menu-list";

const navMain = getMenuList("/");

const data = {
  user: {
    name: "VishalMadanCA",
    email: "vishalmadanCA@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "VishalMadanCA",
      logo: () => (
        <Image src="/company-logo.svg" alt="My Icon" width={32} height={32} />
      ),
      plan: "Enterprise",
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
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
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
