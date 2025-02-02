import * as HttpStatusCodes from 'stoker/http-status-codes';

import type { SigninMagicLinkRoute, SigninOAuthRoute } from './auth.routes';

import { AppRouteHandler } from '@/server/types';
import { EmailTemplateMagicLink } from '@/server/lib/email/templates/magic-link';
import { MAGIC_LINK_TOKEN_EXPIRY } from '@/server/lib/constants/enums';
import emailClient from '@/server/lib/email/config';
import jwt from 'jsonwebtoken';

export const signinMagicLink: AppRouteHandler<SigninMagicLinkRoute> = async (c) => {
    const { email } = c.req.valid('json');
    const payload = { email };
    const secret = process.env.AUTH_SECRET;
    const token = jwt.sign(payload, secret, { expiresIn: MAGIC_LINK_TOKEN_EXPIRY });

    await emailClient.send(EmailTemplateMagicLink({ to: email, token }));

    return c.json({ data: 'Magic link created successfully!' }, HttpStatusCodes.OK);
};

export const signinOAuth: AppRouteHandler<SigninOAuthRoute> = async (c) => {
    const magicReq = c.req.valid('json');

    return c.json(
        {
            data: {
                email: 'visheshdubey2016@gmail.com',
                name: 'Vishesh',
            },
        },
        HttpStatusCodes.OK
    );
};
