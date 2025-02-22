import { Role } from '@prisma/client';
import { z } from 'zod';

export const GetUserProfileResSchema = z.object({
    name: z.string().nullable(),
    id: z.number().int(),
    email: z.string().email(),
    phone: z.string().nullable(),
    provider: z.string().nullable(),
    isBlocked: z.boolean(),
    isEmailVerified: z.boolean(),
    fcmToken: z.string().nullable(),
    avatar: z.string().nullable(),
    role: z.nativeEnum(Role),
    createdAt: z.date(),
    updatedAt: z.date(),
});
