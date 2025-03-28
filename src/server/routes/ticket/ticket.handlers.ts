import * as HttpStatusCodes from 'stoker/http-status-codes';
import * as HttpStatusPhrases from 'stoker/http-status-phrases';

import {
    CreateTicketRoute,
    DeleteTicketRoute,
    GetTicketByIdRoute,
    ListTicketsRoute,
    UpdateTicketRoute,
} from './ticket.routes';
import { dbTicketCreate, dbTicketDelete, dbTicketGetById, dbTicketList, dbTicketUpdate } from '@/server/lib/db/ticket';

import { AppRouteHandler } from '@/server/types';
import { get } from '@/lib/utils/lodash-get';
export const createTicket: AppRouteHandler<CreateTicketRoute> = async (c) => {
    const req = c.req.valid('json');
    const userId = get(c, 'var.user.id');
    const ticket = await dbTicketCreate({
        status: req.status,
        assignedTo: req.assignedTo,
        teamTicketTypeId: req.teamTicketTypeId,
        updatedBy: userId,
        createdBy: userId,
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
