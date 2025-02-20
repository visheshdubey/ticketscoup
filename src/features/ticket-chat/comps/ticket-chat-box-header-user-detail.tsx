import { UserAvatar } from '@/components/user-avatar';

type Props = {
    userInitials: string;
    userName: string;
    id: string;
};

export const TicketChatBoxHeaderUserDetail = ({ userInitials, userName, id }: Props) => {
    return (
        <div className="flex relative items-center gap-4 py-1.5">
            <UserAvatar userInitials={userInitials} className="size-9" />
            <div className="flex flex-col">
                <span className="font-satoshi font-medium text-base text-[#0C0A09]">{userName}</span>
                <div className="flex items-center">
                    <span className="font-medium font-satoshi text-[#A09B96] text-xs">{id}</span>
                </div>
            </div>
        </div>
    );
};
