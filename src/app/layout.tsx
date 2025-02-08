import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from "next/font/local";
import type { Metadata } from 'next';
import NotificationProvider from '@/components/providers/NotificationProvider';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from '@/components/ui/sonner';
import nextAuthOptions from '@/features/auth/auth-options';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const satoshiVariable = localFont({
  src: "../../public/font/Satoshi-Variable.ttf",
  variable: "--font-satoshi-variable",
});

const clashGroteskVariable = localFont({
  src: "../../public/font/ClashGrotesk-Variable.ttf",
  variable: "--font-clash-grotesk-variable",
});

export const metadata: Metadata = {
    title: 'Ticketscoup | Effortlessely create support tickets',
    description: 'Ticketing Platform',
};

type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>;

export default async function RootLayout({ children }: RootLayoutProps) {
    const session = await nextAuthOptions.auth();

    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} ${satoshiVariable.variable} ${clashGroteskVariable.variable} antialiased`}>
                <SessionProvider session={session}>
                    <NotificationProvider>{children}</NotificationProvider>
                    <Toaster />
                </SessionProvider>
            </body>
        </html>
    );
}
