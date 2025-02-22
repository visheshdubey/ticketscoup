type FetchBaseFn = (params: { method: string; path: string; data?: any; jwt?: string }) => Promise<any>;
type GetParams = { path: string; jwt?: string };
type PostParams = { path: string; data: any; jwt?: string };
type PatchParams = { path: string; data: any; jwt?: string };
type DeleteParams = { path: string; jwt?: string };

const BASE_ROUTE = '/api/';

export const fetchBase: FetchBaseFn = async ({ method, path, data, jwt }) => {
    const res = await fetch(`${BASE_ROUTE}${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        switch (res.status) {
            case 400:
                throw new Error(`400__${(await res.json()).message || 'Bad request'}`);
            case 401:
                throw new Error('401__Unauthorized');
            case 403:
                throw new Error('403__Forbidden');
            case 404:
                throw new Error('404__Not found');
            case 500:
                throw new Error('500__Internal server error');
            default:
                throw new Error('500__Something went wrong');
        }
    }

    return res.json();
};

export const client = {
    get: async ({ path, jwt }: GetParams) => fetchBase({ method: 'GET', path, jwt }),
    post: async ({ path, data, jwt }: PostParams) => fetchBase({ method: 'POST', path, data, jwt }),
    patch: async ({ path, data, jwt }: PatchParams) => fetchBase({ method: 'PATCH', path, data, jwt }),
    delete: async ({ path, jwt }: DeleteParams) => fetchBase({ method: 'DELETE', path, jwt }),
};
