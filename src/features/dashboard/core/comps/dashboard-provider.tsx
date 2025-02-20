import { ReactNode } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';

type DashboardContext = {};

type DashboardProviderProps = {
    children: ReactNode;
};
export const DashboardProvider = (props: DashboardProviderProps) => {
    return <SidebarProvider>{props.children}</SidebarProvider>;
};
