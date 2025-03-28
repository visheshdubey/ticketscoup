import { UserSchema } from '@/server/lib/schemas';
import { Role } from '@prisma/client';
import { z } from 'zod';

export const GetUserProfileResSchema = UserSchema;
