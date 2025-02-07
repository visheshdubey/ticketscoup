'use client';

import { usePushNotification } from '@/lib/fcm';

export default function Home() {
    const { setMuted, muted } = usePushNotification({
        onMessage: (payload) => {
            console.log(payload.title);
        },
    });

    return <div className="text-xl font-bold px-4">UnAuthenticated Page</div>;
}
