import * as HttpStatusCodes from 'stoker/http-status-codes';

import {
    SigninMagicLinkRequest,
    SigninMagicLinkResponse,
    SigninOAuthRequest,
    SigninOAuthResponse,
} from './auth.schema';
import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers';

import { createErrorSchema } from 'stoker/openapi/schemas';
import { createRoute } from '@hono/zod-openapi';

const tags = ['Authentication'];

export const signinMagicLink = createRoute({
    path: '/signin/magic-link',
    method: 'post',
    request: {
        body: jsonContentRequired(SigninMagicLinkRequest, 'Email address to send the magic link to'),
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(SigninMagicLinkResponse, 'The created magic link'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(SigninMagicLinkResponse),
            'The validation error(s)'
        ),
    },
});

export const signinOAuth = createRoute({
    path: '/signin/oauth',
    method: 'post',
    request: {
        body: jsonContentRequired(SigninOAuthRequest, 'Email address to validate if account present'),
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(SigninOAuthResponse, 'Created User'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(SigninOAuthResponse),
            'The validation error(s)'
        ),
    },
});

export type SigninMagicLinkRoute = typeof signinMagicLink;
export type SigninOAuthRoute = typeof signinOAuth;
