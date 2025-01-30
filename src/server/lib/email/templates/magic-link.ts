export const MagicLinkTemplate = (email: string, link: string) => {
    return {
        to: email,
        subject: 'Your Magic Link',
        html: `<p>Click the link to sign in: ${link}</p>`,
    };
};
