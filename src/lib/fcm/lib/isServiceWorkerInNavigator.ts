export const isServiceWorkerInNavigator =
    typeof window !== 'undefined' && 'serviceWorker' in navigator && 'PushManager' in window;
