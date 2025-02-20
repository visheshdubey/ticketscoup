import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Props = {};

const TicketChatBoxHeaderActionsType = (props: Props) => {
    return (
        <Select>
            <SelectTrigger className="xl:w-full min-w-[140px] max-w-full">
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

export default TicketChatBoxHeaderActionsType;
