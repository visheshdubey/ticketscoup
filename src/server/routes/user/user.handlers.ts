import * as HttpStatusCodes from 'stoker/http-status-codes';
import * as HttpStatusPhrases from 'stoker/http-status-phrases';

import { AppRouteHandler } from '@/server/types';
import { GetUserProfile } from './user.routes';
import { dbUserFindById } from '@/server/lib/db/user';
import { get } from '@/lib/utils/lodash-get';

export const getUserProfile: AppRouteHandler<GetUserProfile> = async (c) => {
    const userId = get(c, 'var.user.id');
    const userProfile = await dbUserFindById({ id: Number(userId) || -10 });

    if (!userProfile) {
        return c.json(
            {
                message: HttpStatusPhrases.NOT_FOUND,
            },
            HttpStatusCodes.NOT_FOUND
        );
    }

    return c.json(userProfile, HttpStatusCodes.OK);
};
