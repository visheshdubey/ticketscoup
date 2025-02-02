import * as HttpStatusCodes from 'stoker/http-status-codes';

import { createMessageObjectSchema } from 'stoker/openapi/schemas';
import { createRoute } from '@hono/zod-openapi';
import { createRouter } from '@/server/lib/create-app';
import { jsonContent } from 'stoker/openapi/helpers';

const router = createRouter().openapi(
    createRoute({
        tags: ['Index'],
        method: 'get',
        path: '/',
        responses: {
            [HttpStatusCodes.OK]: jsonContent(createMessageObjectSchema('Ticketscoup API'), 'Ticketscoup API Index'),
        },
    }),
    (c) => {
        return c.json(
            {
                message: 'Ticketscoup API',
            },
            HttpStatusCodes.OK
        );
    }
);

export default router;
