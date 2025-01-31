import jwt, { JWTPayload } from 'jsonwebtoken';

import Credentials from 'next-auth/providers/credentials';
import { dbUserUpsertAndFetch } from '@/server/lib/db/user';

export const CredentialAuth = Credentials({
    credentials: {
        token: {},
    },
    authorize: async (credentials) => {
        const { token } = credentials;
        const decodedToken = jwt.verify(token as string, process.env.AUTH_SECRET as string) as JWTPayload;

        if (!decodedToken) {
            return null;
        }

        const user = await dbUserUpsertAndFetch({ email: decodedToken.email });

        if (user) {
            return { email: user.email };
        }

        return null;
    },
});
