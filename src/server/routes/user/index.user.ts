import * as handlers from './user.handlers';
import * as routes from './user.routes';

import { createRouter } from '@/server/lib/create-app';

const router = createRouter().openapi(routes.getUserProfile, handlers.getUserProfile);

export default router;
