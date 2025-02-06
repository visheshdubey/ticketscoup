import { MailOptions } from '@/server/lib/email/types';

export const EmailTemplateMagicLink = (
    options: Omit<MailOptions, 'subject' | 'from'> & { token: string }
): MailOptions => ({
    to: options.to,
    from: process.env.SMTP_USER,
    subject: 'Sign in to Ticketscoup',
    html: `<p>Click the link to sign in: ${process.env.NEXT_PUBLIC_APP_URL}/signin/magic?token=${options.token}</p>`,
});
