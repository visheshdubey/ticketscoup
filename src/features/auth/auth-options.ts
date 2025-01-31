import { dbUserCreate, dbUserFindByEmail } from '@/server/lib/db/user';

import { CredentialAuth } from './auth-providers/credentials';
import { GithubAuth } from '@/features/auth/auth-providers/github';
import { NextAuthConfig } from 'next-auth';

export const authOptions: NextAuthConfig = {
    providers: [GithubAuth, CredentialAuth],

    secret: process.env.AUTH_SECRET,

    session: {
        strategy: 'jwt',
    },
    //TODO: Need to update this, as the DB schema has changed
    callbacks: {
        async signIn({ user, account, profile }) {
            if (!user.email) {
                return false;
            }

            try {
                let dbUser = await dbUserFindByEmail(user.email);

                if (!dbUser) {
                    dbUser = await dbUserCreate({
                        email: user.email,
                        provider: account?.provider,
                        avatar: user.image,
                        name: user.name,
                    });
                }

                return true;
            } catch (error) {
                console.error('SignIn Error:', error);
                return false;
            }
        },
        //TODO: Need to update this, as the DB schema has changed
        async jwt({ token, user, account, trigger, session }) {
            if (account && user) {
                token.id = user.id;

                return token;
            }

            if (trigger === 'update' && session) {
                token = { ...token, ...session };

                return token;
            }

            if (!token.email) {
                return token;
            }

            const dbUser = await dbUserFindByEmail(token.email);

            if (!dbUser) {
                return token;
            }

            return {
                ...token,
                id: dbUser.id,
                email: dbUser.email,
                // providers: dbUser.provider,
            };
        },
        //TODO: Need to update this, as the DB schema has changed
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
