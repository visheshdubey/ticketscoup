"use client";

import { AppSidebar } from "@/features/dashboard/comps/app-sidebar";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import  AppHeader  from "@/features/dashboard/comps/app-header";
import { useState } from "react";

export default function Page() {
  const [hasNotifications, setHasNotifications] = useState(true);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset style={{ backgroundColor: "#0C0A09" }}>
        <AppHeader hasNotifications={hasNotifications} />

        

        {/* Remove the code when making home page design */}
        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div> */}
      </SidebarInset>
    </SidebarProvider>
  );
}
