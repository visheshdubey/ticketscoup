'use client';

import * as Avatar from '@radix-ui/react-avatar';

type UserAvatarProps = {
    initials: string;
};

const UserAvatar = ({ initials }: UserAvatarProps) => {
    return (
        <Avatar.Root className="relative flex h-9 w-9 md:h-10 md:w-10 items-center justify-center overflow-hidden rounded-full border bg-gray-200">
            <Avatar.Fallback
                className="flex h-full w-full items-center justify-center bg-gray-500 text-white text-xs md:text-sm"
                delayMs={600}
            >
                {initials}
            </Avatar.Fallback>
        </Avatar.Root>
    );
};

export default UserAvatar;
