import { client } from './core';

export enum QueryKeys {
    PROFILE = 'PROFILE',
}

export const api = {
    profile: () => client.get({ path: `user/profile` }),
};

export * from './get-api-error-detail';
