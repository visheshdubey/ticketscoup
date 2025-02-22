import * as handlers from './ticket-chat.handlers';
import * as routes from './ticket-chat.routes';

import { createRouter } from '@/server/lib/create-app';

const router = createRouter()
    .openapi(routes.createTicketChat, handlers.createTicket)
    .openapi(routes.updateTicketChat, handlers.updateTicket)
    .openapi(routes.deleteTicketChat, handlers.deleteTicket)
    .openapi(routes.getTicketChatThreadById, handlers.listTickets)
    .openapi(routes.getTicketChatById, handlers.getTicketById);

export default router;
