import type { OpenAPIHono, RouteConfig, RouteHandler } from '@hono/zod-openapi';

import { ExtendedContextForUser } from '@/server/middlewares/req-auth';
import type { PinoLogger } from 'hono-pino';

export interface AppBindings {
    Variables: {
        logger: PinoLogger;
        user: ExtendedContextForUser;
    };
}

export type AppOpenAPI = OpenAPIHono<AppBindings>;

export type AppRouteHandler<R extends RouteConfig> = RouteHandler<R, AppBindings>;
