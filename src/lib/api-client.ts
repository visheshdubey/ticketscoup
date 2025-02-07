type FetchBaseFn = (params: { method: string; path: string; data?: any; jwt?: string }) => Promise<any>;
type GetParams = { path: string; jwt?: string };
type PostParams = { path: string; data: any; jwt?: string };
type PatchParams = { path: string; data: any; jwt?: string };
type DeleteParams = { path: string; jwt?: string };

const BASE_ROUTE = '/api/v1';

const fetchBase: FetchBaseFn = async ({ method, path, data, jwt }) => {
    const res = await fetch(`${BASE_ROUTE}${path}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify(data),
    });

    return res.json();
};

export const apiClient = {
    get: async ({ path, jwt }: GetParams) => fetchBase({ method: 'GET', path, jwt }),
    post: async ({ path, data, jwt }: PostParams) => fetchBase({ method: 'POST', path, data, jwt }),
    patch: async ({ path, data, jwt }: PatchParams) => fetchBase({ method: 'PATCH', path, data, jwt }),
    delete: async ({ path, jwt }: DeleteParams) => fetchBase({ method: 'DELETE', path, jwt }),
};
