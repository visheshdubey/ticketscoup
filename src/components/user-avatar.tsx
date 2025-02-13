import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

type UserAvatarProps = {
    userInitials: string;
    className?: string;
};

export function UserAvatar({ userInitials, className }: UserAvatarProps) {
    return (
        <Avatar className={cn('size-8', className)}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{userInitials}</AvatarFallback>
        </Avatar>
    );
}
