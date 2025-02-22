import * as HttpStatusCodes from 'stoker/http-status-codes';
import * as HttpStatusPhrases from 'stoker/http-status-phrases';

import {
    CreateTicketTypeRoute,
    DeleteTicketTypeRoute,
    GetTeamByIdRoute,
    GetTicketByIdRoute,
    ListTicketTypesRoute,
    UpdateTicketTypeRoute,
} from './team.routes';
import {
    dbTeamCreateTicketType,
    dbTeamDeleteTicketType,
    dbTeamGetById,
    dbTeamGetTicketTypeById,
    dbTeamListTicketTypes,
    dbTeamUpdateTicketType,
} from '@/server/lib/db/team';

import { AppRouteHandler } from '@/server/types';

export const createTicketType: AppRouteHandler<CreateTicketTypeRoute> = async (c) => {
    const req = c.req.valid('json');
    const ticketType = await dbTeamCreateTicketType(req);

    return c.json(ticketType, HttpStatusCodes.OK);
};

export const updateTicketType: AppRouteHandler<UpdateTicketTypeRoute> = async (c) => {
    const req = c.req.valid('json');
    const ticketType = await dbTeamUpdateTicketType(req);

    return c.json(ticketType, HttpStatusCodes.OK);
};

export const deleteTicketType: AppRouteHandler<DeleteTicketTypeRoute> = async (c) => {
    const req = c.req.valid('json');
    const ticketType = await dbTeamDeleteTicketType(req);

    return c.json(ticketType, HttpStatusCodes.OK);
};

export const listTicketTypes: AppRouteHandler<ListTicketTypesRoute> = async (c) => {
    const req = c.req.valid('param');
    const ticketTypes = await dbTeamListTicketTypes({ teamId: req.id.toString() });

    return c.json(ticketTypes, HttpStatusCodes.OK);
};

export const getTicketTypeById: AppRouteHandler<GetTicketByIdRoute> = async (c) => {
    const req = c.req.valid('param');
    const ticketType = await dbTeamGetTicketTypeById({ ticketTypeId: req.id.toString() });

    if (!ticketType) {
        return c.json(
            {
                message: HttpStatusPhrases.NOT_FOUND,
            },
            HttpStatusCodes.NOT_FOUND
        );
    }

    return c.json(ticketType, HttpStatusCodes.OK);
};

export const getTeamById: AppRouteHandler<GetTeamByIdRoute> = async (c) => {
    const req = c.req.valid('param');
    const ticketType = await dbTeamGetById({ teamId: req.id.toString() });

    if (!ticketType) {
        return c.json(
            {
                message: HttpStatusPhrases.NOT_FOUND,
            },
            HttpStatusCodes.NOT_FOUND
        );
    }

    return c.json(ticketType, HttpStatusCodes.OK);
};
