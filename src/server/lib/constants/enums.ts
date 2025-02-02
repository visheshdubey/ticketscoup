import * as HttpStatusPhrases from 'stoker/http-status-phrases';

import { createMessageObjectSchema } from 'stoker/openapi/schemas';

export const MAGIC_LINK_TOKEN_EXPIRY = '15m';

export enum AuthProvider {
    UNKNOWN = 0,
    MAGIC_LINK,
    GITHUB,
}

export const ZOD_ERROR_MESSAGES = {
    REQUIRED: 'Required',
    EXPECTED_NUMBER: 'Expected number, received nan',
    NO_UPDATES: 'No updates provided',
};

export const ZOD_ERROR_CODES = {
    INVALID_UPDATES: 'invalid_updates',
};

export const notFoundSchema = createMessageObjectSchema(HttpStatusPhrases.NOT_FOUND);
