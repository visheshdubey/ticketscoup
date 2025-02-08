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

  return (
    <SidebarProvider>
      <AppSidebar/>
      <SidebarInset className="md:bg-[#0C0A09]">
        <AppHeader hasNotifications={hasNotifications} />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
