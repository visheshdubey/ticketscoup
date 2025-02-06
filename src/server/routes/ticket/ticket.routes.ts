import * as HttpStatusCodes from 'stoker/http-status-codes';

import {
    CreateTicketReqSchema,
    CreateTicketResSchema,
    DeleteTicketResSchema,
    GetTicketByIdResSchema,
    ListTicketsResSchema,
    UpdateTicketReqSchema,
    UpdateTicketResSchema,
} from './ticket.schema';
import { IdParamsSchema, createErrorSchema } from 'stoker/openapi/schemas';
import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers';

import { createRoute } from '@hono/zod-openapi';
import { notFoundSchema } from '@/server/lib/constants/enums';

const tags = ['Ticket'];

export const createTicket = createRoute({
    path: '/ticket',
    method: 'post',
    request: {
        body: jsonContentRequired(CreateTicketReqSchema, 'Create ticket request'),
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(CreateTicketResSchema, 'Created ticket'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(CreateTicketResSchema),
            'The validation error(s)'
        ),
    },
});

export const updateTicket = createRoute({
    path: '/ticket',
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

export const deleteTicket = createRoute({
    path: '/ticket/{id}',
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

export const listTickets = createRoute({
    path: '/team/{id}/tickets',
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

export const getTicketById = createRoute({
    path: '/ticket/{id}',
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

export type CreateTicketRoute = typeof createTicket;
export type UpdateTicketRoute = typeof updateTicket;
export type DeleteTicketRoute = typeof deleteTicket;
export type ListTicketsRoute = typeof listTickets;
export type GetTicketByIdRoute = typeof getTicketById;
