import { House, Store, Users, Contact, Bell, Settings } from 'lucide-react';
import { Role } from '@prisma/client';
import { AudioWaveform, Command } from 'lucide-react';

export function getMenuList(pathname: string) {
    return {
        groupLabel: 'Dashboard',
        items: [
            {
                title: 'Overview',
                url: '/dashboard',
                icon: House,
                requiredRoleAny: [Role.ADMIN, Role.MANAGER, Role.STAFF, Role.DEVELOPER, Role.CLIENT],
            },
            {
                title: 'Tickets',
                url: '/dashboard/tickets',
                icon: Store,
                requiredRoleAny: [Role.ADMIN, Role.MANAGER, Role.STAFF, Role.DEVELOPER, Role.CLIENT],
            },
            {
                title: 'Clients',
                url: '/dashboard/clients',
                icon: Users,
                requiredRoleAny: [Role.ADMIN, Role.MANAGER, Role.STAFF],
            },
            {
                title: 'Staff',
                url: '/dashboard/staff',
                icon: Contact,
                requiredRoleAny: [Role.ADMIN, Role.MANAGER],
            },
            {
                title: 'Notifications',
                url: '#',
                icon: Bell,
                requiredRoleAny: [Role.ADMIN, Role.MANAGER, Role.STAFF, Role.DEVELOPER, Role.CLIENT],
            },
            {
                title: 'Settings',
                icon: Settings,
                requiredRoleAny: [Role.ADMIN, Role.MANAGER, Role.DEVELOPER, Role.STAFF, Role.CLIENT],
                items: [
                    {
                        title: 'Ticket Types',
                        url: '#',
                        requiredRoleAny: [Role.ADMIN, Role.MANAGER, Role.DEVELOPER],
                    },
                    {
                        title: 'Organization Info',
                        url: '#',
                        requiredRoleAny: [Role.ADMIN, Role.MANAGER, Role.DEVELOPER],
                    },
                    {
                        title: 'Personal Info',
                        url: '#',
                        requiredRoleAny: [Role.ADMIN, Role.MANAGER, Role.STAFF, Role.DEVELOPER, Role.CLIENT],
                    },
                    {
                        title: 'Help & Support',
                        url: '#',
                        requiredRoleAny: [Role.ADMIN, Role.MANAGER, Role.STAFF, Role.DEVELOPER, Role.CLIENT],
                    },
                ],
            },
        ],
    };
}

export type PageKey = 'dashboard' | 'tickets' | 'clients' | 'staff' | 'notifications';

export const widgets = [
    { title: 'Total tickets', value: '7,265', growth: '+11.01' },
    { title: 'Unassigned', value: '3,671', growth: '+11.01' },
    { title: 'In-progress', value: '51', growth: '+11.01' },
    { title: 'Done', value: '230', growth: '+11.01' },
    { title: 'On-Hold', value: '2', growth: '+11.01' },
    { title: 'Avg. resolution time (Hr)', value: '13', growth: '+11.01' },
];

export const pageTitleMap: Record<PageKey, string> = {
    dashboard: 'Overview',
    tickets: 'All Tickets',
    clients: 'Clients',
    staff: 'Staff',
    notifications: 'Notifications',
};

export const sidebarElementsMap: Record<PageKey, string> = {
    dashboard: 'Overview',
    tickets: 'Tickets',
    clients: 'Clients',
    staff: 'Staff',
    notifications: 'Notifications',
};

export function getTeamElements() {
    return {
        user: {
            name: 'VishalMadanCA',
            email: 'vishalmadanCA@example.com',
            avatar: '/company-logo.svg',
        },
        teams: [
            {
                name: 'VishalMadanCA',
                logo: '/company-logo.svg',
                plan: 'Visit Site',
            },
            {
                name: 'Acme Corp.',
                logo: AudioWaveform,
                plan: 'Startup',
            },
            {
                name: 'Evil Corp.',
                logo: Command,
                plan: 'Free',
            },
        ],
    };
}

export const tickets = [
    {
        id: '1',
        userName: 'Vishesh Dubey',
        status: 'In-Progress',
        type: 'GST',
        unReadCount: 22,
    },
    {
        id: '2',
        userName: 'Vishesh Dubey',
        status: 'In-Progress',
        type: 'GST',
        unReadCount: 22,
    },
    {
        userInitials: 'CN',
        id: '3',
        userName: 'Vishesh Dubey',
        status: 'In-Progress',
        type: 'GST',
        unReadCount: 22,
    },
    {
        userInitials: 'CN',
        id: '4',
        userName: 'Vishesh Dubey',
        status: 'In-Progress',
        type: 'GST',
        unReadCount: 22,
    },
    {
        userInitials: 'CN',
        id: '5',
        userName: 'Vishesh Dubey',
        status: 'In-Progress',
        type: 'GST',
        unReadCount: 22,
    },
];
