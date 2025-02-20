'use client';

import { Button } from '@/components/ui/button';
import { FileInput } from '@/components/ui/file-input';
import { Textarea } from '@/components/ui/textarea';
import { TicketChatBoxHeader } from '@/features/ticket-chat/comps/ticket-chat-box-header';
import { TicketChatCard } from '@/features/ticket-chat/comps/ticket-chat-card';
import { isEmpty } from '@/lib/lodash-is-empty';
import { cn } from '@/lib/utils';
import { useState } from 'react';

type Props = {
    handleToggleSidebar: () => void;
    open: boolean;
};

export default function TicketChatBox({ open, handleToggleSidebar }: Props) {
    const [files, setFiles] = useState<FileList | null>(null);

    //TODO: Remove the data when api integrated
    const data = {
        id: 'TK-101',
        userName: 'Vishesh Kumar Dubey',
        status: 'In-Progress',
        type: 'GST',
    };

    //TODO: Remove the chatMessage when api integrated
    const chatMessages = [
        {
            id: '1',
            userName: 'John Doe',
            description:
                'Lorem ipsum data Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis perferendis non vitae, ad illo, suscipit vel error sequi fuga, laborum repellat expedita. Libero, quisquam voluptatem. Voluptatum corporis rem est.',
            isMine: true,
            timestamp: '2025-02-13T10:00:00Z',
        },
        {
            id: '2',
            userName: 'Jamie Smith',
            description: 'Lorem ipsum dolor.',
            isMine: false,
            timestamp: '2025-02-13T10:05:00Z',
        },
        {
            id: '3',
            userName: 'John Doe',
            description: 'Lorem ipsum dolor.',
            isMine: true,
            timestamp: '2025-02-13T10:10:00Z',
        },
        {
            id: '4',
            userName: 'Jamie Smith',
            description:
                'Lorem ipsum data Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis perferendis non vitae, ad illo, suscipit vel error sequi fuga, laborum repellat expedita. Libero, quisquam voluptatem. Voluptatum corporis rem est.',
            isMine: false,
            timestamp: '2024-02-14T18:00:00.000Z',
        },
        {
            id: '5',
            userName: 'Jamie Smith',
            description:
                'Lorem ipsum data Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis perferendis non vitae, ad illo, suscipit vel error sequi fuga, laborum repellat expedita. Libero, quisquam voluptatem. Voluptatum corporis rem est.',
            isMine: false,
            timestamp: '2024-02-14T18:00:00.000Z',
        },
        {
            id: '6',
            userName: 'Jamie Smith',
            description:
                'Lorem ipsum data Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis perferendis non vitae, ad illo, suscipit vel error sequi fuga, laborum repellat expedita. Libero, quisquam voluptatem. Voluptatum corporis rem est.',
            isMine: true,
            timestamp: '2024-02-14T18:00:00.000Z',
        },
        {
            id: '7',
            userName: 'Jamie Smith',
            description:
                'Lorem ipsum data Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis perferendis non vitae, ad illo, suscipit vel error sequi fuga, laborum repellat expedita. Libero, quisquam voluptatem. Voluptatum corporis rem est.',
            isMine: false,
            timestamp: '2024-02-14T18:00:00.000Z',
        },
        {
            id: '8',
            userName: 'Jamie Smith',
            description:
                'Lorem ipsum data Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis perferendis non vitae, ad illo, suscipit vel error sequi fuga, laborum repellat expedita. Libero, quisquam voluptatem. Voluptatum corporis rem est.',
            isMine: false,
            timestamp: '2024-02-14T18:00:00.000Z',
        },
        {
            id: '9',
            userName: 'Jamie Smith',
            description:
                'Lorem ipsum data Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis perferendis non vitae, ad illo, suscipit vel error sequi fuga, laborum repellat expedita. Libero, quisquam voluptatem. Voluptatum corporis rem est.',
            isMine: true,
            timestamp: '2024-02-14T18:00:00.000Z',
        },
        {
            id: '10',
            userName: 'Jamie Smith',
            description:
                'Lorem ipsum data Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis perferendis non vitae, ad illo, suscipit vel error sequi fuga, laborum repellat expedita. Libero, quisquam voluptatem. Voluptatum corporis rem est.',
            isMine: false,
            timestamp: '2024-02-14T18:00:00.000Z',
        },
    ];

    return (
        <div
            className={cn(
                'grow relative h-full flex flex-col bg-zinc-50',
                open ? 'max-h-[calc(100svh_-_64px)]' : 'max-h-[calc(100svh_-_48px)]'
            )}
        >
            <TicketChatBoxHeader ticket={data} handleToggleSidebar={handleToggleSidebar} open={open} />

            <div className="w-full h-full max-h-[calc(100vh_-_220px)] mx-auto overflow-y-scroll scrollbar-none flex flex-col gap-5 px-4 py-6">
                {chatMessages.map((chat) => (
                    <TicketChatCard key={chat.id} data={chat} />
                ))}
            </div>

            <div className="absolute bottom-0 md:pb-4 lg:px-4 w-full">
                {!isEmpty(files) && (
                    <div className="w-full h-8 bg-white">
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                            // TODO: Fix ??, should not be used here
                            {Array.from(files ?? [])
                                .map((file) => file.name)
                                .join(', ')}
                        </div>
                    </div>
                )}
                <div className="h-fit flex items-center relative border overflow-y-auto scrollbar-thin w-full rounded-lg bg-white lg:focus-within:outline lg:outline-1">
                    <Textarea
                        placeholder="Type your message here."
                        className="shadow-none resize-none min-h-20 max-w-4xl ring-0  focus-visible:ring-0 focus:ring-0 scrollbar-none outline-none p-4 w-full focus:outline-none border-none focus:border-none"
                    />
                    <div className="flex absolute right-4 gap-2 items-center">
                        {/* <Button variant={'ghost'}>
                            <PaperclipIcon className="size-4" />
                        </Button>
                         */}

                        <FileInput onFileInput={setFiles} />
                        <Button className="font-satoshi font-medium text-sm bg-neutral-200 text-gray-950 hover:bg-neutral-300">
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
