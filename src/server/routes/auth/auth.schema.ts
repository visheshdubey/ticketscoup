import { z } from 'zod';

export const MagicLinkResponse = z.object({
    data: z.string(),
});

export const MagicLinkRequest = z.object({
    email: z.string().email(),
});
