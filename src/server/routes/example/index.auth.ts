import * as handlers from './auth.handlers';
import * as routes from './auth.routes';

import { createRouter } from '@/server/lib/create-app';

const router = createRouter()
    .openapi(routes.signinMagicLink, handlers.signinMagicLink)
    .openapi(routes.signinOAuth, handlers.signinOAuth);

export default router;
