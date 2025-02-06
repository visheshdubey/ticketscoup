import * as HttpStatusCodes from 'stoker/http-status-codes';

import { AppRouteHandler } from '@/server/types';
import type { SigninMagicLinkRoute } from './auth.routes';

export const signinMagicLink: AppRouteHandler<SigninMagicLinkRoute> = async (c) => {
    const magicReq = c.req.valid('json');
    return c.json({ data: 'Magic link created' }, HttpStatusCodes.OK);
};

export const signinOAuth: AppRouteHandler<SigninMagicLinkRoute> = async (c) => {
    const magicReq = c.req.valid('json');
    return c.json({ data: 'Magic link created' }, HttpStatusCodes.OK);
};
