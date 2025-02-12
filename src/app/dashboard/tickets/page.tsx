'use client';

import Image from 'next/image';

type Props = {};

const TicketsPage = (props: Props) => {
    return (
        <div className="bg-slate-50 w-full h-full flex items-center justify-center">
            <div className="flex items-center justify-center flex-col gap-6">
                <Image src={'/ui/empty-inbox.png'} alt="Inbox is empty" width={320} height={320} />
                <span className="font-satoshi text-muted-foreground">Please select a chat to interact</span>
            </div>
        </div>
    );
};

export default TicketsPage;
