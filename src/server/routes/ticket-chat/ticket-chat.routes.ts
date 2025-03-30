import * as HttpStatusCodes from 'stoker/http-status-codes';

import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers';

import { createErrorSchema, IdParamsSchema } from 'stoker/openapi/schemas';
import { createRoute } from '@hono/zod-openapi';
import { notFoundSchema } from '@/server/lib/constants/enums';
import {
    CreateTicketChatReqSchema,
    CreateTicketChatResSchema,
    UpdateTicketChatReqSchema,
    UpdateTicketChatResSchema,
    DeleteTicketChatResSchema,
    GetTicketChatThreadResSchema,
} from './ticket-chat.schema';

const tags = ['Ticket Chat'];

export const createTicketChat = createRoute({
    path: '/ticket-chat',
    method: 'post',
    request: {
        body: jsonContentRequired(CreateTicketChatReqSchema, 'Create ticket chat request'),
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(CreateTicketChatResSchema, 'Created ticket chat'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(CreateTicketChatResSchema),
            'The validation error(s)'
        ),
    },
});

export const updateTicketChat = createRoute({
    path: '/ticket-chat/{id}',
    method: 'put',
    request: {
        body: jsonContentRequired(UpdateTicketChatReqSchema, 'Update ticket chat request'),
        params: IdParamsSchema,
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(UpdateTicketChatResSchema, 'Updated ticket chat'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(UpdateTicketChatResSchema),
            'The validation error(s)'
        ),
        [HttpStatusCodes.NOT_FOUND]: jsonContent(notFoundSchema, 'Ticket chat not found'),
    },
});

export const deleteTicketChat = createRoute({
    path: '/ticket-chat/{id}',
    method: 'delete',
    request: {
        params: IdParamsSchema,
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(DeleteTicketChatResSchema, 'Deleted ticket chat'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(DeleteTicketChatResSchema),
            'The validation error(s)'
        ),
        [HttpStatusCodes.NOT_FOUND]: jsonContent(notFoundSchema, 'Ticket chat not found'),
    },
});

export const getTicketChatThreadByTicketId = createRoute({
    path: '/ticket-chat/{id}',
    method: 'get',
    request: {
        params: IdParamsSchema,
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(GetTicketChatThreadResSchema, 'Ticket chat thread by ticket id'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(GetTicketChatThreadResSchema),
            'The validation error(s)'
        ),
        [HttpStatusCodes.NOT_FOUND]: jsonContent(notFoundSchema, 'Ticket chat thread not found'),
    },
});

export type CreateTicketChatRoute = typeof createTicketChat;
export type UpdateTicketChatRoute = typeof updateTicketChat;
export type DeleteTicketChatRoute = typeof deleteTicketChat;
export type GetTicketChatThreadByTicketIdRoute = typeof getTicketChatThreadByTicketId;
