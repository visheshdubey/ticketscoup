"use client";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/features/dashboard/comps/app-sidebar";
import AppHeader from "@/features/dashboard/comps/app-header";
import { useState } from "react";
import { AudioWaveform, Command } from "lucide-react";
import Image from "next/image";
import DashboardLayout from "@/features/dashboard/comps/dashboard-layout";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
