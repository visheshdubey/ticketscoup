import { Segment } from '@/constants/index';

type Props = {
    segments: Segment[];
};

export function TicketInfoSegments({ segments }: Props) {
    if (!segments) {
        return;
    }

    return (
        <>
            {segments.map((segment) => (
                <div key={segment.heading} className="flex flex-col gap-3">
                    <span className="font-satoshi font-medium text-xs text-neutral-400">{segment.heading}</span>
                    <div className="flex border border-zinc-100 p-3 h-7 min-w-36 rounded-md"></div>
                </div>
            ))}
        </>
    );
}
