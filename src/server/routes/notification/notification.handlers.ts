import * as HttpStatusCodes from 'stoker/http-status-codes';

import { AppRouteHandler } from '@/server/types';
import type { NotificationRegisterFCM } from './notification.routes';

export const notificationRegisterFCM: AppRouteHandler<NotificationRegisterFCM> = async (c) => {
    const magicReq = c.req.valid('json');
    return c.json({ data: 'FCM token registered' }, HttpStatusCodes.OK);
};
