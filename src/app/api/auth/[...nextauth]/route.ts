import NextAuth from 'next-auth';
import authOptions from '@/features/auth/auth-options';

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions);
export const { GET, POST } = handlers;
