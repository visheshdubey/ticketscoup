import * as handlers from './ticket-chat.handlers';
import * as routes from './ticket-chat.routes';

import { createRouter } from '@/server/lib/create-app';

const router = createRouter()
    .openapi(routes.createTicketChat, handlers.createTicketChat)
    .openapi(routes.updateTicketChat, handlers.updateTicketChat)
    .openapi(routes.deleteTicketChat, handlers.deleteTicketChat)
    .openapi(routes.getTicketChatThreadByTicketId, handlers.getTicketChatThreadByTicketId);

export default router;
