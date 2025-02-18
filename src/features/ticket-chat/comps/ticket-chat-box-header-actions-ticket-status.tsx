import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Props = {};

const TicketChatBoxHeaderActionsStatus = (props: Props) => {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">In-progress</SelectItem>
                <SelectItem value="dark">Todo</SelectItem>
                <SelectItem value="system">Hold</SelectItem>
                <SelectItem value="Cancelled">Cancelled</SelectItem>
                <SelectItem value="Done">Done</SelectItem>
            </SelectContent>
        </Select>
    );
};

export default TicketChatBoxHeaderActionsStatus;
