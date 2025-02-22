import { client } from './core';

export enum QueryKeys {
    PROFILE = 'PROFILE',
    TEAM_TICKET_TYPES = 'TEAM_TICKET_TYPES',
    TEAM = 'TEAM',
}

export const api = {
    profile: () => client.get({ path: `user/profile` }),
    getTeamTicketTypes: ({ id }: { id: number }) => client.get({ path: `team/${id}/ticket-types` }),
    getTeam: ({ id }: { id: number }) => client.get({ path: `team/${id}` }),
};

export * from './get-api-error-detail';
