// import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi';

// import { EmailTemplateMagicLink } from './lib/email/templates/magic-link';
// import { MAGIC_LINK_TOKEN_EXPIRY } from './lib/constants/enums';
// import emailClient from './lib/email/config';
// import jwt from 'jsonwebtoken';

// // const app = new Hono();

// const app = new OpenAPIHono();

// // Define the schemas with proper OpenAPI metadata
// const MagicLinkResponse = z
//     .object({
//         data: z.string().openapi({
//             example: 'Magic link sent successfully!',
//             description: 'Success message confirming the magic link was sent',
//         }),
//     })
//     .openapi('MagicLinkResponse');

// const MagicLinkRequest = z
//     .object({
//         email: z.string().email().openapi({
//             example: 'user@example.com',
//             description: 'Email address to send the magic link to',
//         }),
//     })
//     .openapi('MagicLinkRequest');

// const route = createRoute({
//     method: 'post',
//     path: '/signin/magic',
//     request: {
//         body: MagicLinkRequest,
//     },
//     responses: {
//         200: {
//             content: {
//                 'application/json': {
//                     schema: MagicLinkResponse,
//                 },
//             },
//             description: 'Retrieve the user',
//         },
//     },
// });

// app.get('/', (c) => {
//     return c.text('Hello World');
// });

// app.post('/fcm', (c) => {
//     return c.json({ data: 'FCM token updated successfully!' });
// });

// app.openapi(route, async (c) => {
//     const { email } = c.req.valid('json');
//     const payload = { email };
//     const secret = process.env.AUTH_SECRET!;
//     const token = jwt.sign(payload, secret, { expiresIn: MAGIC_LINK_TOKEN_EXPIRY });

//     await emailClient.send(EmailTemplateMagicLink({ to: email, token }));

//     return c.json({ data: 'Magic link sent successfully!' });
// });

// export default app;
