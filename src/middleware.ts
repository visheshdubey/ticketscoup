import { NextRequest, NextResponse } from 'next/server';

import { getToken } from 'next-auth/jwt';

export const config = {
    matcher: ['/dashboard/:path*', '/dashboard', '/signin', '/sign-up', '/', '/verify/:path*', '/settings'],
};

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.AUTH_SECRET });
    const url = request.nextUrl;

    if (token && (url.pathname.startsWith('/signin') || url.pathname === '/')) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    if (!token && (url.pathname.startsWith('/dashboard') || url.pathname.startsWith('/settings'))) {
        return NextResponse.redirect(new URL('/signin', request.url));
    }

    return NextResponse.next();
}
