'use client';

import { TicketChatBoxHeader } from '@/features/ticket-chat/comps/ticket-chat-box-header';
import { TicketChatCard } from '@/features/ticket-chat/comps/ticket-chat-card';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/components/ui/sidebar';

type Props = {
    handleToggleSidebar: () => void;
    open: boolean;
};

export default function TicketChatBox({ open, handleToggleSidebar }: Props) {
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
                'grow h-full flex flex-col bg-zinc-50',
                open ? 'max-h-[calc(100svh_-_64px)]' : 'max-h-[calc(100svh_-_48px)]'
            )}
        >
            <TicketChatBoxHeader ticket={data} handleToggleSidebar={handleToggleSidebar} open={open} />

            <div className="w-full h-full mx-auto overflow-y-scroll flex flex-col gap-5 px-4 py-6">
                {chatMessages.map((chat) => (
                    <TicketChatCard key={chat.id} data={chat} />
                ))}
            </div>
        </div>
    );
}
