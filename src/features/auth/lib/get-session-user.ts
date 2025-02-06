import { UserProfile } from '../types/next-auth';
import { auth } from '@/app/api/auth/[...nextauth]/route';
import { get } from '@/lib/lodash-get';

export const getSession = {
    client: (session: any) => {
        return {
            id: get(session, `data.token.id`),
            name: get(session, `data.token.name`),
            email: get(session, `data.token.email`),
            provider: get(session, `data.token.provider`),
            role: get(session, `data.token.role`, 'CLIENT'),
        };
    },
    server: async () => {
        const session = (await auth()) as any;
        let sessionUser: UserProfile;

        sessionUser = {
            id: get(session, `data.token.id`),
            name: get(session, `data.token.name`),
            email: get(session, `data.token.email`),
            provider: get(session, `data.token.provider`),
            role: get(session, `data.token.role`, 'CLIENT'),
        };
        console.log(sessionUser);

        return sessionUser;
    },
};
