import auth from '@/server/routes/auth/index.auth';
import configureOpenAPI from '@/server/lib/openapi/configure-openapi';
import createApp from '@/server/lib/create-app';
import notification from '@/server/routes/notification/notification.index';
import routeIndex from '@/server/routes/index.routes';
import team from '@/server/routes/team/index.team';
import ticket from '@/server/routes/ticket/index.ticket';

const app = createApp();

configureOpenAPI(app);

const routes = [routeIndex, auth, notification, team, ticket] as const;

routes.forEach((route) => {
    app.route('/', route);
});

export type AppType = (typeof routes)[number];

export default app;
