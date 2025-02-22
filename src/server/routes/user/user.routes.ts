import * as HttpStatusCodes from 'stoker/http-status-codes';

import { GetUserProfileResSchema } from './user.schema';
import { createErrorSchema } from 'stoker/openapi/schemas';
import { createRoute } from '@hono/zod-openapi';
import { jsonContent } from 'stoker/openapi/helpers';
import { notFoundSchema } from '@/server/lib/constants/enums';

const tags = ['User'];

export const getUserProfile = createRoute({
    path: '/user/profile',
    method: 'get',
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(GetUserProfileResSchema, 'User profile'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(GetUserProfileResSchema),
            'The validation error(s)'
        ),
        [HttpStatusCodes.NOT_FOUND]: jsonContent(notFoundSchema, 'User not found'),
    },
});

export type GetUserProfile = typeof getUserProfile;
