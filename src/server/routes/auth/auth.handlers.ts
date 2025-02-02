import * as HttpStatusCodes from 'stoker/http-status-codes';

import { AppRouteHandler } from '@/server/types';
import type { CreateRoute } from './auth.routes';

export const create: AppRouteHandler<CreateRoute> = async (c) => {
    const magicReq = c.req.valid('json');
    return c.json({ data: 'Magic link created' }, HttpStatusCodes.OK);
};
