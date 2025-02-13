import { UserAvatar } from '@/components/user-avatar';
import { TicketData } from '@/constants/index';
import { getNameInitials } from '@/lib/get-name-initials';

type TicketChatBoxHeaderProps = {
    ticket: TicketData;
};

export function TicketChatBoxHeader(props: TicketChatBoxHeaderProps) {
    const { userName, id } = props.ticket;
    const userInitials = getNameInitials(userName);

    return (
        <>
            <div className="w-full bg-white border-b px-4 py-0.5">
                <div className="flex relative items-center gap-4 py-1.5">
                    <UserAvatar userInitials={userInitials} className="size-9" />
                    <div className="flex flex-col">
                        <span className="font-satoshi font-medium text-base text-[#0C0A09]">{userName}</span>
                        <div className="flex items-center">
                            <span className="font-medium font-satoshi text-[#A09B96] text-xs">{id}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
