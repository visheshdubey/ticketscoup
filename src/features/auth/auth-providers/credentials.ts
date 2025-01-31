import jwt, { JWTPayload } from 'jsonwebtoken';

import Credentials from 'next-auth/providers/credentials';

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

        //TODO: Here we have to check if the user is in the database, if not then we have to create the user
        if (decodedToken.email === 'visheshdubey2016@gmail.com') {
            return { email: decodedToken.email };
        }

        return null;
    },
});
