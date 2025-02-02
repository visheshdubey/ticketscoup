import * as HttpStatusCodes from 'stoker/http-status-codes';

import { NotificationRegisterFCMRequest, NotificationRegisterFCMResponse } from './notification.schema';
import { jsonContent, jsonContentRequired } from 'stoker/openapi/helpers';

import { createErrorSchema } from 'stoker/openapi/schemas';
import { createRoute } from '@hono/zod-openapi';

const tags = ['Notification'];

export const notificationRegisterFCM = createRoute({
    path: '/notification/register-fcm',
    method: 'post',
    request: {
        body: jsonContentRequired(NotificationRegisterFCMRequest, 'FCM Token to register for the user'),
    },
    tags,
    responses: {
        [HttpStatusCodes.OK]: jsonContent(NotificationRegisterFCMResponse, 'Success message'),
        [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(
            createErrorSchema(NotificationRegisterFCMResponse),
            'The validation error(s)'
        ),
    },
});

export type NotificationRegisterFCM = typeof notificationRegisterFCM;
