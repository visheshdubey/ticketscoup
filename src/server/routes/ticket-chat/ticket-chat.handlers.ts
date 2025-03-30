import * as HttpStatusCodes from 'stoker/http-status-codes';

import { AppRouteHandler } from '@/server/types';
import {
    CreateTicketChatRoute,
    UpdateTicketChatRoute,
    DeleteTicketChatRoute,
    GetTicketChatThreadByTicketIdRoute,
} from './ticket-chat.routes';
import {
    dbTicketChatCreate,
    dbTicketChatUpdate,
    dbTicketChatDelete,
    dbTicketChatGetThreadByTicketId,
} from '@/server/lib/db/ticket-chat';

export const createTicketChat: AppRouteHandler<CreateTicketChatRoute> = async (c) => {
    const req = c.req.valid('json');
    const ticketChat = await dbTicketChatCreate(req);
    return c.json(ticketChat, HttpStatusCodes.OK);
};

export const updateTicketChat: AppRouteHandler<UpdateTicketChatRoute> = async (c) => {
    const body = c.req.valid('json');
    const params = c.req.valid('param');

    const ticketChat = await dbTicketChatUpdate({
        id: params.id,
        ...body,
    });

    return c.json(ticketChat, HttpStatusCodes.OK);
};

export const deleteTicketChat: AppRouteHandler<DeleteTicketChatRoute> = async (c) => {
    const params = c.req.valid('param');
    const ticketChat = await dbTicketChatDelete({ id: params.id });
    return c.json(ticketChat, HttpStatusCodes.OK);
};

export const getTicketChatThreadByTicketId: AppRouteHandler<GetTicketChatThreadByTicketIdRoute> = async (c) => {
    const params = c.req.valid('param');
    const ticketChats = await dbTicketChatGetThreadByTicketId({ ticketId: params.id });
    return c.json(ticketChats, HttpStatusCodes.OK);
};
