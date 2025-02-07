import 'next-auth';
import { DefaultSession } from 'next-auth';

type UserProfile = { id?: string; name?: string; email: string; provider?: string; role?: string };

declare module 'next-auth' {
    interface Session extends DefaultSession {
        token?: JWT;
    }
    interface User extends UserProfile {}
}

declare module 'next-auth/jwt' {
    interface JWT extends UserProfile {}
}

type ProvidersType = Record<LiteralUnion<BuiltInProviderType>, ClientSafeProvider>;
