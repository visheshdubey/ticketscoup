import GoogleProvider from 'next-auth/providers/google';

export const googleConfig = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
};

export const GoogleAuth = GoogleProvider(googleConfig);
