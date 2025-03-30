import * as HttpStatusCodes from 'stoker/http-status-codes';
import * as HttpStatusPhrases from 'stoker/http-status-phrases';

import {
    CreateTicketRoute,
    DeleteTicketRoute,
    GetTicketByIdRoute,
    ListTicketsRoute,
    UpdateTicketRoute,
} from './ticket.routes';
import {
    dbTicketCreate,
    dbTicketDelete,
    dbTicketGetById,
    dbTeamTicketList,
    dbTicketUpdate,
} from '@/server/lib/db/ticket';

import { AppRouteHandler } from '@/server/types';
import { get } from '@/lib/utils/lodash-get';
export const createTicket: AppRouteHandler<CreateTicketRoute> = async (c) => {
    const req = c.req.valid('json');
    const userId = get(c, 'var.user.id');
    const ticket = await dbTicketCreate({
        status: req.status,
        assignedTo: req.assignedTo,
        teamTicketTypeId: req.teamTicketTypeId,
        updatedBy: userId.toString(),
        createdBy: userId.toString(),
        teamId: req.teamId,
        clientId: req.clientId,
    });

    return c.json(ticket, HttpStatusCodes.OK);
};

export const updateTicket: AppRouteHandler<UpdateTicketRoute> = async (c) => {
    console.log('updateTicket');
    const req = c.req.valid('json');
    const reqParams = c.req.valid('param');
    const userId = get(c, 'var.user.id');
    const ticket = await dbTicketUpdate({
        assignedTo: get(req, 'assignedTo'),
        clientId: get(req, 'clientId'),
        teamTicketTypeId: get(req, 'teamTicketTypeId'),
        updatedBy: userId.toString(),
        status: get(req, 'status'),
        ticketId: reqParams.id.toString(),
    });

    return c.json(ticket, HttpStatusCodes.OK);
};

export const deleteTicket: AppRouteHandler<DeleteTicketRoute> = async (c) => {
    const req = c.req.valid('param');
    const ticket = await dbTicketDelete({ ticketId: req.id.toString() });

    return c.json(ticket, HttpStatusCodes.OK);
};

export const listTickets: AppRouteHandler<ListTicketsRoute> = async (c) => {
    const req = c.req.valid('param');
    const tickets = await dbTeamTicketList({ teamId: req.id.toString() });

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
