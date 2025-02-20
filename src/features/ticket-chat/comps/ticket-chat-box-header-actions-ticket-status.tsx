import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Props = {};

const TicketChatBoxHeaderActionsStatus = (props: Props) => {
    return (
        <Select>
            <SelectTrigger className="xl:w-full min-w-[140px] max-w-full">
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
