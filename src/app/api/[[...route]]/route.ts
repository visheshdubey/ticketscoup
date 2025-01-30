import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import v1 from '@/server/v1';

export const runtime = 'edge';

const app = new Hono().basePath('/api');
const routes = app.route('/v1', v1);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
