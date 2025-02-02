import { z } from 'zod';

export const NotificationRegisterFCMRequest = z.object({
    token: z.string(),
});

export const NotificationRegisterFCMResponse = z.object({
    data: z.string(),
});
