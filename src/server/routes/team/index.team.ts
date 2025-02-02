import * as handlers from './team.handlers';
import * as routes from './team.routes';

import { createRouter } from '@/server/lib/create-app';

const router = createRouter()
    .openapi(routes.createTicketType, handlers.createTicketType)
    .openapi(routes.updateTicketType, handlers.updateTicketType)
    .openapi(routes.deleteTicketType, handlers.deleteTicketType)
    .openapi(routes.listTicketTypes, handlers.listTicketTypes)
    .openapi(routes.getTicketById, handlers.getTicketTypeById);

export default router;
