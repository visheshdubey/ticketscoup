'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { toast } from 'sonner';
import { usePushNotification } from '@/lib/fcm';

export default function Home() {
    const { setMuted, muted } = usePushNotification({
        onMessage: (payload) => {
            console.log(payload.title);
        },
    });

    return (
        <div>
            <Button onClick={() => setMuted(!muted)}>{muted ? 'Unmute' : 'Mute'}</Button>
            <Button onClick={() => toast('Example Notification.')}>Show Notification</Button>

            <Link href={'/signin'}>signin</Link>
        </div>
    );
}
