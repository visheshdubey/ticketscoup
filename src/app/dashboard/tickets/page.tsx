'use client';

import Image from 'next/image';
import { getAPIErrorDetail } from '@/lib/api';
import { useQueryProfile } from '@/features/profile/hooks/useQueryProfile';

type Props = {};

const TicketsPage = (props: Props) => {
    const { data, error } = useQueryProfile();

    return (
        <div className="bg-slate-50 hidden w-full h-full lg:flex items-center justify-center">
            <div className="flex items-center justify-center flex-col gap-6">
                <pre className="text-xs">{getAPIErrorDetail(error)?.message}</pre>
                <Image src={'/ui/empty-inbox.png'} alt="Inbox is empty" width={320} height={320} />
                <span className="font-satoshi text-muted-foreground">Please select a chat to interact</span>
            </div>
        </div>
    );
};

export default TicketsPage;
