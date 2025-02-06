import { House, Store, Users, Contact, Bell, Settings } from "lucide-react";
import { Role } from "@prisma/client";

export function getMenuList(pathname: string) {
  return {
    groupLabel: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/dashboard/overview",
        icon: House,
        requiredRoleAny: [
          Role.ADMIN,
          Role.MANAGER,
          Role.STAFF,
          Role.DEVELOPER,
          Role.CLIENT,
        ],
      },
      {
        title: "Tickets",
        url: "/dashboard/tickets",
        icon: Store,
        requiredRoleAny: [
          Role.ADMIN,
          Role.MANAGER,
          Role.STAFF,
          Role.DEVELOPER,
          Role.CLIENT,
        ],
      },
      {
        title: "Clients",
        url: "/dashboard/clients",
        icon: Users,
        requiredRoleAny: [Role.ADMIN, Role.MANAGER, Role.STAFF],
      },
      {
        title: "Staff",
        url: "/dashboard/staff",
        icon: Contact,
        requiredRoleAny: [Role.ADMIN, Role.MANAGER],
      },
      {
        title: "Notifications",
        url: "#",
        icon: Bell,
        requiredRoleAny: [
          Role.ADMIN,
          Role.MANAGER,
          Role.STAFF,
          Role.DEVELOPER,
          Role.CLIENT,
        ],
      },
      {
        title: "Settings",
        icon: Settings,
        requiredRoleAny: [
          Role.ADMIN,
          Role.MANAGER,
          Role.DEVELOPER,
          Role.STAFF,
          Role.CLIENT,
        ],
        items: [
          {
            title: "Ticket Types",
            url: "#",
            requiredRoleAny: [Role.ADMIN, Role.MANAGER, Role.DEVELOPER],
          },
          {
            title: "Organization Info",
            url: "#",
            requiredRoleAny: [Role.ADMIN, Role.MANAGER, Role.DEVELOPER],
          },
          {
            title: "Personal Info",
            url: "#",
            requiredRoleAny: [
              Role.ADMIN,
              Role.MANAGER,
              Role.STAFF,
              Role.DEVELOPER,
              Role.CLIENT,
            ],
          },
          {
            title: "Help & Support",
            url: "#",
            requiredRoleAny: [
              Role.ADMIN,
              Role.MANAGER,
              Role.STAFF,
              Role.DEVELOPER,
              Role.CLIENT,
            ],
          },
        ],
      },
    ],
  };
}
