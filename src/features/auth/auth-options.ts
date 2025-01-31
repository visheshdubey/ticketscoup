import { dbUserFindByEmail, dbUserUpsertAndFetch } from '@/server/lib/db/user';

import { AuthProvider } from '@/server/lib/constants/enums';
import { CredentialAuth } from './auth-providers/credentials';
import { GithubAuth } from '@/features/auth/auth-providers/github';
import { NextAuthConfig } from 'next-auth';

export const authOptions: NextAuthConfig = {
    providers: [GithubAuth, CredentialAuth],

    secret: process.env.AUTH_SECRET,

    session: {
        strategy: 'jwt',
    },

    callbacks: {
        async signIn({ user, account, profile }) {
            try {
                if (!user.email) {
                    return false;
                }

                await dbUserUpsertAndFetch({ email: user.email, name: user.name, provider: AuthProvider.UNKNOWN });

                return true;
            } catch (error) {
                console.error('~ auth-options.ts signin error', error);
                return false;
            }
        },

        async jwt({ token, user, account, trigger, session }) {
            /**
             * If account and user are present, it means this is the initial sign-in. The callback adds the user's ID to the token.
             */
            // Initial sign-in
            if (account && user) {
                token.id = user.id;
                return token;
            }

            // Token update
            if (trigger === 'update' && session) {
                token = { ...token, ...session };
                return token;
            }

            // Token validation
            if (!token.email) {
                return token;
            }

            const dbUser = await dbUserFindByEmail(token.email);

            if (!dbUser) {
                return token;
            }

            // Update token with user details from the database
            return {
                ...token,
                id: dbUser.id,
                email: dbUser.email,
                providers: dbUser.provider,
            };
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.token = token;
            }

            return session;
        },
    },

    pages: {
        signIn: '/signin',
        error: '/auth/error',
    },

    debug: process.env.NODE_ENV === 'development',
};

export default authOptions;
