import { EmailTemplateMagicLink } from './lib/email/templates/magic-link';
import { Hono } from 'hono';
import { MAGIC_LINK_TOKEN_EXPIRY } from './lib/constants/enums';
import emailClient from './lib/email/config';
import jwt from 'jsonwebtoken';

const app = new Hono();

app.get('/', (c) => {
    return c.text('Hello World');
});

app.post('/signin/magic', async (c) => {
    const { email } = await c.req.json();
    const payload = {
        email,
    };
    const secret = process.env.AUTH_SECRET as string;
    const token = jwt.sign(payload, secret, { expiresIn: MAGIC_LINK_TOKEN_EXPIRY });

    await emailClient.send(EmailTemplateMagicLink({ to: email, token }));

    return c.json({ data: 'Magic link sent successfully!' });
});

export default app;
