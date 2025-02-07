export const useSendFcmTokenToServer = ({ path }: { path: string }) => {
    const sendFCMTokenToServer = async (token: string) => {
        if (token) {
            await fetch(path, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });

            console.log('~ FCM token sent to server');
        } else {
            console.error('FCM token not found in local storage');
        }
    };

    return sendFCMTokenToServer;
};
