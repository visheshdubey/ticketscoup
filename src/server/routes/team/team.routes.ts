import * as HttpStatusCodes from 'stoker/http-status-codes';

import {
    CreateTicketTypeReqSchema,
    CreateTicketTypeResSchema,
    DeleteTicketTypeReqSchema,
    DeleteTicketTypeResSchema,
    GetTeamByIdResSchema,
    GetTicketByIdResSchema,
    ListTicketTypesResSchema,
    UpdateTicketTypeReqSchema,
    UpdateTicketTypeResSchema,
} from './team.schema';
import { IdParamsSchema, createErrorSchema } from 'stoker/openapi/schemas';
import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers';

import { createRoute } from '@hono/zod-openapi';
import { notFoundSchema } from '@/server/lib/constants/enums';

const tags = ['Team'];

export const createTicketType = createRoute({
    path: '/team/ticket-type',
    method: 'post',
    request: {
        body: jsonContentRequired(CreateTicketTypeReqSchema, 'Create ticket type request'),
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(CreateTicketTypeResSchema, 'Created ticket type'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(CreateTicketTypeResSchema),
            'The validation error(s)'
        ),
    },
});

export const updateTicketType = createRoute({
    path: '/team/ticket-type',
    method: 'put',
    request: {
        body: jsonContentRequired(UpdateTicketTypeReqSchema, 'Update ticket type request'),
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(UpdateTicketTypeResSchema, 'Updated ticket type'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(UpdateTicketTypeResSchema),
            'The validation error(s)'
        ),
    },
});

export const deleteTicketType = createRoute({
    path: '/team/ticket-type',
    method: 'delete',
    request: {
        body: jsonContentRequired(DeleteTicketTypeReqSchema, 'Delete ticket type request'),
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(DeleteTicketTypeResSchema, 'Deleted ticket type'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(DeleteTicketTypeResSchema),
            'The validation error(s)'
        ),
    },
});

export const listTicketTypes = createRoute({
    path: '/team/{id}/ticket-types',
    method: 'get',
    request: {
        params: IdParamsSchema,
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(ListTicketTypesResSchema, 'List of ticket types'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(ListTicketTypesResSchema),
            'The validation error(s)'
        ),
    },
});

export const getTicketById = createRoute({
    path: '/team/ticket-type/{id}',
    method: 'get',
    request: {
        params: IdParamsSchema,
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(GetTicketByIdResSchema, 'Ticket type details'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(GetTicketByIdResSchema),
            'The validation error(s)'
        ),
        [HttpStatusCodes.NOT_FOUND]: jsonContent(notFoundSchema, 'Ticket type not found'),
    },
});

export const getTeamById = createRoute({
    path: '/team/{id}',
    method: 'get',
    request: {
        params: IdParamsSchema,
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(GetTeamByIdResSchema, 'Team details'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(GetTeamByIdResSchema),
            'The validation error(s)'
        ),
        [HttpStatusCodes.NOT_FOUND]: jsonContent(notFoundSchema, 'Team not found'),
    },
});

export type CreateTicketTypeRoute = typeof createTicketType;
export type UpdateTicketTypeRoute = typeof updateTicketType;
export type DeleteTicketTypeRoute = typeof deleteTicketType;
export type ListTicketTypesRoute = typeof listTicketTypes;
export type GetTicketByIdRoute = typeof getTicketById;
export type GetTeamByIdRoute = typeof getTeamById;
