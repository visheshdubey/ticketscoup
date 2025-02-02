import * as HttpStatusCodes from 'stoker/http-status-codes';

import { MagicLinkRequest, MagicLinkResponse } from './auth.schema';
import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers';

import { createErrorSchema } from 'stoker/openapi/schemas';
import { createRoute } from '@hono/zod-openapi';

const tags = ['Authentication'];

export const create = createRoute({
    path: '/sign-in/magic-link',
    method: 'post',
    request: {
        body: jsonContentRequired(MagicLinkRequest, 'Email address to send the magic link to'),
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(MagicLinkResponse, 'The created magic link'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(MagicLinkResponse),
            'The validation error(s)'
        ),
    },
});

export type CreateRoute = typeof create;
