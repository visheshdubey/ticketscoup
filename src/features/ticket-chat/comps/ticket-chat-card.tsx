import { TicketChatData } from '@/constants/index';
import { getNameInitials } from '@/lib/get-name-initials';
import { cn } from '@/lib/utils';
import { UserAvatar } from '@/components/user-avatar';

type TicketChatCardProps = {
    data: TicketChatData;
};

export function TicketChatCard(props: TicketChatCardProps) {
    const { userName, description, isMine, timestamp } = props.data;
    const userInitials = getNameInitials(userName);
    const chatTime = new Date(timestamp).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    return (
        <div className={cn('flex gap-2 ', isMine ? 'flex-row-reverse' : '')}>
            <UserAvatar userInitials={userInitials} />
            <div className={cn('flex flex-col gap-2 ', isMine ? 'items-end' : 'items-start')}>
                <div className="bg-white border border-[#EEEEEE] p-4 rounded-xl max-w-lg font-satoshi text-base leading-5 text-gray-900">
                    {description}
                </div>
                <span className="text-xs font-satoshi font-medium text-[#999999]">{chatTime}</span>
            </div>
        </div>
    );
}
