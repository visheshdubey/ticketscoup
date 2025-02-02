import auth from '@/server/routes/auth/index.auth';
import configureOpenAPI from '@/server/lib/openapi/configure-openapi';
import createApp from '@/server/lib/create-app';
import routeIndex from '@/server/routes/index.routes';

const app = createApp();

configureOpenAPI(app);

const routes = [routeIndex, auth] as const;

routes.forEach((route) => {
    app.route('/', route);
});

export type AppType = (typeof routes)[number];

export default app;
