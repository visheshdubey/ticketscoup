import BunnyClient, { BunnyConfig } from './BunnyClient';

const config: BunnyConfig = {
    apiKey: process.env.BUNNY_API_KEY,
    storageZoneName: process.env.BUNNY_STORAGE_ZONE,
    hostname: process.env.BUNNY_HOSTNAME,
};

export const cdn = BunnyClient.getInstance(config);
