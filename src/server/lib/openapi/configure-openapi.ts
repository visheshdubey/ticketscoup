import { apiReference } from '@scalar/hono-api-reference';

import type { AppOpenAPI } from '@/server/types';

import packageJSON from '../../../../package.json' with { type: 'json' };

export default function configureOpenAPI(app: AppOpenAPI) {
    app.doc('/doc', {
        openapi: '3.0.0',
        info: {
            version: packageJSON.version,
            title: 'TicketScoup API',
        },
    });

    app.get(
        '/reference',
        apiReference({
            theme: 'bluePlanet',
            layout: 'classic',
            defaultHttpClient: {
                targetKey: 'javascript',
                clientKey: 'fetch',
            },
            spec: {
                url: '/api/doc',
            },
            pageTitle: 'Ticketscoup API Documentation',
        })
    );
}
