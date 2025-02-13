import TicketChatBox from '@/features/ticket-chat/comps/ticket-chat-box';
import { TicketInfoPane } from '@/features/ticket-chat/comps/ticket-info-pane';

type Props = {};

const TicketDetailPage = (props: Props) => {
    return (
        <>
            <TicketChatBox />
            <TicketInfoPane />
        </>
    );
};

export default TicketDetailPage;
