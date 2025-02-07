import * as handlers from './ticket.handlers';
import * as routes from './ticket.routes';

import { createRouter } from '@/server/lib/create-app';

const router = createRouter()
    .openapi(routes.createTicket, handlers.createTicket)
    .openapi(routes.updateTicket, handlers.updateTicket)
    .openapi(routes.deleteTicket, handlers.deleteTicket)
    .openapi(routes.listTickets, handlers.listTickets)
    .openapi(routes.getTicketById, handlers.getTicketById);

export default router;
