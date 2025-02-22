import { COOKIE_NAME_AUTH_JS_SESSION_TOKEN } from '@/constants/enums';
import { createMiddleware } from 'hono/factory';
import { dbUserFindByEmail } from '../lib/db/user';
import { decode } from 'next-auth/jwt';
import { get } from '@/lib/utils/lodash-get';
import { getCookie } from 'hono/cookie';

export type ExtendedContextForUser = {
    id?: string;
    name?: string;
    role?: string;
};

export type AuthMiddleware = {
    Variables: {
        user: ExtendedContextForUser;
    };
};

export const authMiddleware = createMiddleware<AuthMiddleware>(async (c, next) => {
    const authSessionToken = getCookie(c, COOKIE_NAME_AUTH_JS_SESSION_TOKEN);
    const decodedSessionToken = await decode({
        token: authSessionToken,
        secret: process.env.AUTH_SECRET,
        salt: COOKIE_NAME_AUTH_JS_SESSION_TOKEN,
    });

    // TODO: Needs refactoring for Vishesh
    const userEmail = get(decodedSessionToken, 'email');
    if (!userEmail) {
        await next();
        return;
    }
    const user = await dbUserFindByEmail(userEmail);

    c.set('user', { id: get(user, 'id'), name: get(user, 'email'), role: get(user, 'role') });

    await next();
});
