import * as HttpStatusCodes from 'stoker/http-status-codes';

import {
    CreateTicketReqSchema,
    CreateTicketResSchema,
    DeleteTicketResSchema,
    GetTicketByIdResSchema,
    ListTicketsResSchema,
    UpdateTicketReqSchema,
    UpdateTicketResSchema,
} from './ticket-chat.schema';
import { IdParamsSchema, createErrorSchema } from 'stoker/openapi/schemas';
import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers';

import { createRoute } from '@hono/zod-openapi';
import { notFoundSchema } from '@/server/lib/constants/enums';

const tags = ['Ticket Chat'];

export const createTicketChat = createRoute({
    path: '/ticket-chat',
    method: 'post',
    request: {
        body: jsonContentRequired(CreateTicketReqSchema, 'Create ticket chat request'),
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(CreateTicketResSchema, 'Created ticket chat'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(CreateTicketResSchema),
            'The validation error(s)'
        ),
    },
});

export const updateTicketChat = createRoute({
    path: '/ticket-chat',
    method: 'put',
    request: {
        body: jsonContentRequired(UpdateTicketReqSchema, 'Update ticket request'),
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(UpdateTicketResSchema, 'Updated ticket'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(UpdateTicketResSchema),
            'The validation error(s)'
        ),
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
        [HttpStatusCodes.OK]: jsonContent(DeleteTicketResSchema, 'Deleted ticket'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(DeleteTicketResSchema),
            'The validation error(s)'
        ),
    },
});

export const getTicketChatThreadById = createRoute({
    path: '/ticket-chat/thread/{id}',
    method: 'get',
    request: {
        params: IdParamsSchema,
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(ListTicketsResSchema, 'List of tickets'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(ListTicketsResSchema),
            'The validation error(s)'
        ),
    },
});

export const getTicketChatById = createRoute({
    path: '/ticket-chat/{id}',
    method: 'get',
    request: {
        params: IdParamsSchema,
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(GetTicketByIdResSchema, 'Ticket details'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(GetTicketByIdResSchema),
            'The validation error(s)'
        ),
        [HttpStatusCodes.NOT_FOUND]: jsonContent(notFoundSchema, 'Ticket not found'),
    },
});

export type CreateTicketRoute = typeof createTicketChat;
export type UpdateTicketRoute = typeof updateTicketChat;
export type DeleteTicketRoute = typeof deleteTicketChat;
export type ListTicketsRoute = typeof getTicketChatThreadById;
export type GetTicketByIdRoute = typeof getTicketChatById;
