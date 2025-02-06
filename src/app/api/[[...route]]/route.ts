import app from '@/server/app';
import { handle } from 'hono/vercel';

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
