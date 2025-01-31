import { MailOptions } from '../types';

export const EmailTemplateMagicLink = (
    options: Omit<MailOptions, 'subject' | 'from'> & { token: string }
): MailOptions => ({
    to: options.to,
    from: 'stackwaystech@gmail.com',
    subject: 'Sign in to Ticketscoup',
    html: `<p>Click the link to sign in: http://localhost:3001/signin/magic?token=${options.token}</p>`,
});
