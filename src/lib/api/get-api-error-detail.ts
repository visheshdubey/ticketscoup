import { get } from '../utils/lodash-get';

export const getAPIErrorDetail = (params: Error | null) => {
    const message = get(params, 'message');

    if (!message) {
        return;
    }

    const [code, errorMessage] = message.split('__');

    return {
        code: Number(code),
        message: errorMessage,
    };
};
