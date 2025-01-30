import { createUser, findUserByEmail } from '@/server/lib/db/user';

import { GithubAuth } from '@/features/auth/auth-providers/github';
import { NextAuthConfig } from 'next-auth';

export const authOptions: NextAuthConfig = {
    // providers: [GoogleAuth, GithubAuth],
    providers: [GithubAuth],
    secret: process.env.AUTH_SECRET,

    session: {
        strategy: 'jwt',
    },

    callbacks: {
        async signIn({ user, account, profile }) {
            if (!user.email) {
                return false;
            }

            try {
                let dbUser = await findUserByEmail(user.email);

                if (!dbUser) {
                    dbUser = await createUser({
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

            const dbUser = await findUserByEmail(token.email);

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
