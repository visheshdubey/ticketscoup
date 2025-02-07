import * as handlers from './notification.handlers';
import * as routes from './notification.routes';

import { createRouter } from '@/server/lib/create-app';

const router = createRouter().openapi(routes.notificationRegisterFCM, handlers.notificationRegisterFCM);

export default router;
