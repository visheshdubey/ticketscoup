import { NodemailerSingleton } from './NodeMailerClient';

const client = NodemailerSingleton.getInstance({
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
});

export default client;
