import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

import { FCM_TOKEN_LS_KEY } from './lib/constants';
import { NotificationMessage } from './types/NotificationMessage';

export type FCMClientConfig = FirebaseOptions & { serviceWorkerPath: string; vapidKey: string };

export default class FCMClient {
    private _config: FCMClientConfig;
    private _app: FirebaseApp;
    private _messaging: any;
    private _fcmToken: string | null = null;

    constructor(config: FCMClientConfig) {
        this._config = config;
        this._app = initializeApp(config);
        this._messaging = getMessaging(this._app);
    }

    get app() {
        return this._app;
    }

    get messaging() {
        return this._messaging;
    }

    async getToken() {
        const fcmTokenLS = localStorage.getItem(FCM_TOKEN_LS_KEY);

        if (!fcmTokenLS) {
            const token = await getToken(this._messaging, { vapidKey: this._config.vapidKey });

            localStorage.setItem(FCM_TOKEN_LS_KEY, token);
        } else {
            this.setFCMToken(fcmTokenLS);
        }

        return this._fcmToken;
    }

    async refreshToken(callback: (newToken: string) => void) {
        this.messaging.onTokenRefresh(async () => {
            try {
                const newToken = await this.messaging.getToken();
                if (newToken) {
                    callback(newToken);
                } else {
                    console.warn('Failed to retrieve a new FCM token during refresh.');
                }
            } catch (error) {
                console.error('Error during token refresh:', error);
            }
        });
    }

    async registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register(this._config.serviceWorkerPath)
                .then((registration) => {
                    console.log('fcm-sw registered');
                })
                .catch((error) => {
                    console.error('fcm-sw registration failed:', error);
                });
        } else {
            console.error('serviceWorker not found in navigator');
        }
    }

    async onMessage(callback: (payload: NotificationMessage) => void) {
        onMessage(this.messaging, (payload) => {
            console.log('Message received. ', payload);
            callback({
                title: payload?.notification?.title || 'No title',
                body: payload?.notification?.body || ':',
            });
        });
    }

    setFCMToken(token: string) {
        this._fcmToken = token;
    }

    get fcmToken() {
        return this._fcmToken;
    }

    async requestPermission() {
        return Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                console.log('Notification permission granted.');
                return true;
            } else {
                console.warn('Notification permission denied.');
            }

            return false;
        });
    }
}
