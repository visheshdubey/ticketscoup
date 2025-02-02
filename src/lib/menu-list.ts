import { House, Store, Users, Contact, Bell, Settings } from "lucide-react";

export function getMenuList(pathname: string) {
  return {
    groupLabel: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/overview",
        icon: House,
      },
      {
        title: "Tickets",
        url: "/tickets",
        icon: Store,
      },
      {
        title: "Clients",
        url: "/clients",
        icon: Users,
      },
      {
        title: "Staff",
        url: "/staff",
        icon: Contact,
      },
      {
        title: "Notifications",
        url: "#",
        icon: Bell,
      },
      {
        title: "Settings",
        icon: Settings,
        items: [
          {
            title: "Ticket Types",
            url: "#",
          },
          {
            title: "Organization Info",
            url: "#",
          },
          {
            title: "Personal Info",
            url: "#",
          },
          {
            title: "Help & Support",
            url: "#",
          },
        ],
      },
    ],
  };
}
