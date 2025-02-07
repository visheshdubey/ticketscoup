import { z } from 'zod';

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production', 'test']).optional(),
    NEXT_PUBLIC_APP_URL: z.string(),
    DEFAULT_TEAM_NAME: z.string(),
    DEFAULT_TEAM_DEVELOPER_USER_EMAIL: z.string(),
    DEFAULT_TEAM_DEVELOPER_USER_NAME: z.string(),
    DATABASE_URL: z.string(),
    EMAIL_SERVER: z.string(),
    EMAIL_FROM: z.string(),
    SMTP_HOST: z.string(),
    SMTP_PORT: z.coerce.number(),
    SMTP_SECURE: z.string(),
    SMTP_USER: z.string(),
    SMTP_PASSWORD: z.string(),
    AUTH_SECRET: z.string(),
    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),
    NEXT_PUBLIC_FIREBASE_API_KEY: z.string(),
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: z.string(),
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: z.string(),
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: z.string(),
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: z.string(),
    NEXT_PUBLIC_FIREBASE_APP_ID: z.string(),
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: z.string(),
    NEXT_PUBLIC_FIREBASE_VAPID_PUBLIC_KEY: z.string(),
    NEXT_PUBLIC_FIREBASE_VAPID_PRIVATE_KEY: z.string(),
    BUNNY_API_KEY: z.string(),
    BUNNY_STORAGE_ZONE: z.string(),
    BUNNY_HOSTNAME: z.string(),
});

export const validateEnv = () => envSchema.safeParse(process.env);
export type Environment = z.infer<typeof envSchema>;

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envSchema> {}
    }
}
