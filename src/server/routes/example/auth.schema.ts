import { z } from 'zod';

export const SigninMagicLinkRequest = z.object({
    email: z.string().email(),
});

export const SigninMagicLinkResponse = z.object({
    data: z.string(),
});

export const SigninOAuthRequest = z.object({
    email: z.string().email(),
    name: z.string(),
    provider: z.string(),
});

export const SigninOAuthResponse = z.object({
    data: z.object({
        email: z.string().email(),
        name: z.string(),
    }),
});
