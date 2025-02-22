import { TicketChat } from '@/constants/index';
import { UserAvatar } from '@/components/user-avatar';
import { cn } from '@/lib/utils';
import { formatTimestampToLocaleTime } from '@/lib/utils/date-time';
import { getNameInitials } from '@/lib/utils/get-name-initials';

type TicketChatCardProps = {
    data: TicketChat;
};

export function TicketChatCard(props: TicketChatCardProps) {
    const { userName, description, isMine, timestamp } = props.data;
    const userInitials = getNameInitials(userName);
    const chatTime = formatTimestampToLocaleTime(timestamp);

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
