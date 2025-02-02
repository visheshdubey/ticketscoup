"use client";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/features/dashboard/comps/app-sidebar";
import AppHeader from "@/features/dashboard/comps/app-header";
import { useState } from "react";
import { AudioWaveform, Command } from "lucide-react";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [hasNotifications, setHasNotifications] = useState(true);

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

  return (
    <SidebarProvider>
      <AppSidebar/>
      <SidebarInset className="md:bg-[#0C0A09]">
        <AppHeader data={data} hasNotifications={hasNotifications} />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
