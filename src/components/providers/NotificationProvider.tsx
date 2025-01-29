'use client';

import PushNotificationProvider from '@/lib/fcm/PushNotificationProvider';
import React from 'react';
import { fcmClientConfig } from '@/config/fcm';

type Props = {
    children: React.ReactNode;
};

const NotificationProvider = ({ children }: Props) => {
    return <PushNotificationProvider config={fcmClientConfig}>{children}</PushNotificationProvider>;
};

export default NotificationProvider;
