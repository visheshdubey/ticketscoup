'use client';

import { signOut, useSession } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getSession } from '@/features/auth/lib/get-session-user';
import { toast } from 'sonner';
import { useEffect } from 'react';
import { usePushNotification } from '@/lib/fcm';

export default function Home() {
    const { setMuted, muted } = usePushNotification({
        onMessage: (payload) => {
            console.log(payload.title);
        },
    });
    const session = useSession();

    useEffect(() => {
        console.log(session);
    }, [session]);

    return (
        <div>
            <div className="text-xl font-medium">Authenticated Page</div>
            <Button onClick={() => setMuted(!muted)}>{muted ? 'Unmute' : 'Mute'}</Button>
            <Button onClick={() => toast('Example Notification.')}>Show Notification</Button>

            <Link href={'/signin'}>signin</Link>

            <hr />
            <div className="text-xl font-bold mt-12">Session Data</div>
            <pre>{JSON.stringify(getSession.client(session), null, 4)}</pre>

            <Button onClick={() => signOut()}>Logout</Button>
        </div>
    );
}
