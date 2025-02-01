'use client';

import FCMClient, { FCMClientConfig } from './FCMClient';
import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';

import { FCM_BROADCAST_CHANNEL } from './lib/constants';
import { NotificationMessage } from './types/NotificationMessage';
import { isServiceWorkerInNavigator } from './lib/isServiceWorkerInNavigator';
import useNotificationSound from './lib/useNotificationSound';
import { useSendFcmTokenToServer } from './lib/useSendFcmTokenToServer';

type PushNotificationProviderProps = {
    config: FCMClientConfig;
    children: React.ReactNode;
};

type PushNotificationContextType = {
    message: NotificationMessage | null;
    muted: boolean;
    setMuted: Dispatch<SetStateAction<boolean>>;
};

const PushNotificationContext = createContext<PushNotificationContextType | null>(null);

export const usePushNotification = ({
    onMessage,
}: {
    onMessage: (payload: NotificationMessage) => void;
    muted?: boolean;
}) => {
    const context = React.useContext(PushNotificationContext);
    const playSound = useNotificationSound({ src: '/push-notification-sound.mp3', muted: context?.muted });

    if (!context) {
        throw new Error('usePushNotification must be used within a <PushNotificationProvider />');
    }

    useEffect(() => {
        if (context.message) {
            onMessage(context.message);
            playSound();
        }
    }, [context.message, onMessage]);

    // handle background notifications using BroadcastChannel
    useEffect(() => {
        const channel = new BroadcastChannel(FCM_BROADCAST_CHANNEL);

        channel.onmessage = (event) => {
            onMessage(event.data);
            playSound();
        };

        return () => {
            channel.close();
        };
    }, [onMessage, playSound]);

    return context;
};

const PushNotificationProvider = ({ children, config }: PushNotificationProviderProps) => {
    const [message, setMessage] = useState<NotificationMessage | null>(null);
    const [muted, setMuted] = useState(false);
    const sendFCMTokenToServer = useSendFcmTokenToServer({ path: 'api/v1/fcm' });

    let fcmClient: FCMClient | null = null;

    if (isServiceWorkerInNavigator) {
        fcmClient = new FCMClient(config);
    } else {
        console.error('This browser does not support the APIs required for FCM.');
    }

    const initializeFCM = async () => {
        try {
            if (!fcmClient) {
                return;
            }

            await fcmClient.registerServiceWorker();
            await fcmClient.requestPermission();
            await fcmClient.getToken();

            if (fcmClient.fcmToken) {
                sendFCMTokenToServer(fcmClient.fcmToken);
            } else {
                console.error('FCM token not found');
            }
        } catch (error) {
            console.error('Error initializing FCM', error);
        }
    };

    useEffect(() => {
        initializeFCM();

        // TODO: this needs to be fixed, proper subscription handling
        const unsubscribe = fcmClient?.onMessage((payload: NotificationMessage) => {
            setMessage(payload);
        });

        return () => {
            if (unsubscribe) {
                (async () => await unsubscribe)();
            }
        };
    }, [fcmClient]);

    return (
        <PushNotificationContext.Provider value={{ message, muted, setMuted }}>
            {children}
        </PushNotificationContext.Provider>
    );
};

export default PushNotificationProvider;
