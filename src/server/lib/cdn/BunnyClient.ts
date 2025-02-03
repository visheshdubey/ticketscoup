import axios, { AxiosInstance } from 'axios';

export interface BunnyConfig {
    apiKey: string;
    storageZoneName: string;
    hostname?: string;
}

interface FileListItem {
    Guid: string;
    StorageZoneName: string;
    Path: string;
    ObjectName: string;
    Length: number;
    LastChanged: string;
    IsDirectory: boolean;
    ServerId: number;
    ArrayNumber: number;
    DateCreated: string;
    UserID: string;
    ContentType: string;
    StorageZoneId: number;
    Checksum: string;
    ReplicatedZones: string;
}

class BunnyClient {
    private static instance: BunnyClient;
    private axios: AxiosInstance;
    private config: BunnyConfig;

    private constructor(config: BunnyConfig) {
        this.config = config;
        this.axios = axios.create({
            baseURL: `https://${this.config.hostname}.bunnycdn.com/${this.config.storageZoneName}/`,
            headers: {
                AccessKey: config.apiKey,
                'Content-Type': 'application/json',
            },
        });
    }

    public static getInstance(config: BunnyConfig): BunnyClient {
        if (!BunnyClient.instance) {
            BunnyClient.instance = new BunnyClient(config);
        }

        return BunnyClient.instance;
    }

    public async uploadFile(filePath: string, fileContent: Buffer): Promise<void> {
        await this.axios.put(filePath, fileContent);
    }

    public async deleteFile(filePath: string): Promise<void> {
        await this.axios.delete(filePath);
    }

    public async listFiles(directoryPath: string): Promise<FileListItem[]> {
        const response = await this.axios.get(directoryPath);
        return response.data;
    }

    public async listRecentlyUpdatedFiles(directoryPath: string, hours: number): Promise<FileListItem[]> {
        const allFiles = await this.listFiles(directoryPath);
        const now = new Date();
        const hoursAgo = new Date(now.getTime() - hours * 60 * 60 * 1000);

        return allFiles.filter((file) => {
            const lastChanged = new Date(file.LastChanged);
            return lastChanged >= hoursAgo;
        });
    }

    public async renameFile(oldPath: string, newPath: string): Promise<void> {
        await this.axios.post('', null, {
            headers: {
                'Method-Override': 'MOVE',
                Destination: newPath,
            },
            url: oldPath,
        });
    }

    public async moveFile(sourcePath: string, destinationPath: string): Promise<void> {
        await this.renameFile(sourcePath, destinationPath);
    }

    public async readFile(filePath: string): Promise<any[]> {
        const response = await this.axios.get(filePath, {
            responseType: 'text',
            transformResponse: [(data) => data],
        });

        const contentType = response.headers['content-type'];

        if (contentType && contentType.includes('application/json')) {
            try {
                return JSON.parse(response.data);
            } catch (error) {
                console.warn('Failed to parse JSON, returning raw text');
                return response.data;
            }
        }

        return response.data;
    }
}

export default BunnyClient;

export { type FileListItem };
