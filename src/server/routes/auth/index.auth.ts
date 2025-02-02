import * as handlers from './auth.handlers';
import * as routes from './auth.routes';

import { createRouter } from '@/server/lib/create-app';

const router = createRouter().openapi(routes.create, handlers.create);

export default router;
