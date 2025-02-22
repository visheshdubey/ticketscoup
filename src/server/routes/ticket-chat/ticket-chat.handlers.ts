import * as HttpStatusCodes from 'stoker/http-status-codes';
import * as HttpStatusPhrases from 'stoker/http-status-phrases';

import {
    CreateTicketRoute,
    DeleteTicketRoute,
    GetTicketByIdRoute,
    ListTicketsRoute,
    UpdateTicketRoute,
} from './ticket-chat.routes';
import { dbTicketCreate, dbTicketDelete, dbTicketGetById, dbTicketList, dbTicketUpdate } from '@/server/lib/db/ticket';

import { AppRouteHandler } from '@/server/types';

export const createTicket: AppRouteHandler<CreateTicketRoute> = async (c) => {
    const req = c.req.valid('json');
    const ticket = await dbTicketCreate({
        status: req.status,
        assignedTo: req.assignedTo,
        subscribers: req.subscribers,
        teamTicketTypeId: req.teamTicketTypeId,
        updatedBy: req.updatedBy,
        createdBy: req.createdBy,
    });

    return c.json(ticket, HttpStatusCodes.OK);
};

export const updateTicket: AppRouteHandler<UpdateTicketRoute> = async (c) => {
    const req = c.req.valid('json');
    const ticket = await dbTicketUpdate(req);

    return c.json(ticket, HttpStatusCodes.OK);
};

export const deleteTicket: AppRouteHandler<DeleteTicketRoute> = async (c) => {
    const req = c.req.valid('param');
    const ticket = await dbTicketDelete({ ticketId: req.id.toString() });

    return c.json(ticket, HttpStatusCodes.OK);
};

export const listTickets: AppRouteHandler<ListTicketsRoute> = async (c) => {
    const req = c.req.valid('param');
    const tickets = await dbTicketList({ teamTicketTypeId: req.id.toString() });

    return c.json(tickets, HttpStatusCodes.OK);
};

export const getTicketById: AppRouteHandler<GetTicketByIdRoute> = async (c) => {
    const req = c.req.valid('param');
    const ticket = await dbTicketGetById({ ticketId: req.id.toString() });

    if (!ticket) {
        return c.json(
            {
                message: HttpStatusPhrases.NOT_FOUND,
            },
            HttpStatusCodes.NOT_FOUND
        );
    }

    return c.json(ticket, HttpStatusCodes.OK);
};
