import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Props = {};

const TicketChatBoxHeaderActionsAssignedTo = (props: Props) => {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">In-progress</SelectItem>
                <SelectItem value="dark">Todo</SelectItem>
                <SelectItem value="system">Hold</SelectItem>
                <SelectItem value="system">Cancelled</SelectItem>
                <SelectItem value="system">Done</SelectItem>
            </SelectContent>
        </Select>
    );
};

export default TicketChatBoxHeaderActionsAssignedTo;
