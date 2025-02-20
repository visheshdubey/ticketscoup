type Status = 'IN_PROGRESS' | 'TODO' | 'DONE' | 'HOLD' | 'CANCELLED';

type Props = {
    status: Status;
    label?: boolean;
};

const StatusDot = (props: Props) => {
    const statusDataMap: Record<Status, { label: string; hex: string }> = {
        TODO: {
            label: 'Todo',
            hex: '#e7e7e7',
        },
        IN_PROGRESS: {
            label: 'In-progress',
            hex: '#f59b22',
        },
        HOLD: {
            label: 'Hold',
            hex: '#ed000d',
        },
        DONE: {
            label: 'Done',
            hex: '#45deba',
        },
        CANCELLED: {
            label: 'Cancelled',
            hex: '#e7e7e7',
        },
    };

    return (
        <div className="flex gap-1.5 items-center">
            <div className="size-2 rounded-full" style={{ backgroundColor: statusDataMap[props.status].hex }} />
            <span className="text-sm">{statusDataMap[props.status].label}</span>
        </div>
    );
};

export default StatusDot;
