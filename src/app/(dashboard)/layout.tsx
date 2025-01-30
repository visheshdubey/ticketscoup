"use client";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/fetaures/dashboard/comps/app-sidebar";
import AppHeader from "@/fetaures/dashboard/comps/app-header";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [hasNotifications, setHasNotifications] = useState(true);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset style={{ backgroundColor: "#0C0A09" }}>
        <AppHeader hasNotifications={hasNotifications} />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
