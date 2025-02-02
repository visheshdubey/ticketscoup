import type { AppBindings, AppOpenAPI } from '@/server/types';
import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares';

import { OpenAPIHono } from '@hono/zod-openapi';
import { defaultHook } from 'stoker/openapi';
import { pinoLogger } from '@/server/middlewares/pino-logger';

export function createRouter({ basePath = '/' } = {}) {
    return new OpenAPIHono<AppBindings>({
        strict: false,
        defaultHook,
    }).basePath(basePath);
}

export default function createApp() {
    const app = createRouter({ basePath: '/api' });
    app.use(serveEmojiFavicon('📝'));
    app.use(pinoLogger());

    app.notFound(notFound);
    app.onError(onError);
    return app;
}

export function createTestApp<R extends AppOpenAPI>(router: R) {
    return createApp().route('/', router);
}
