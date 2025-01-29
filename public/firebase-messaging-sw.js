importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: 'AIzaSyAg2CxHttt9AW3itTdiF_o4NWCNCFUJqbA',
    authDomain: 'ticketscoup-dev-65723.firebaseapp.com',
    projectId: 'ticketscoup-dev-65723',
    storageBucket: 'ticketscoup-dev-65723.firebasestorage.app',
    messagingSenderId: '141664299489',
    appId: '1:141664299489:web:61fb932465fc2d68c60aa0',
    measurementId: 'G-LJEF9Y48HK',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    const channel = new BroadcastChannel('fcm-broadcast-channel');
    channel.postMessage({ title: payload.notification.title, body: payload.notification.body });
});

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//     console.log('Received background message', payload);

//     const channel = new BroadcastChannel('fcm-broadcast-channel');
//     channel.postMessage(payload); // Send the whole payload, not as a `key` field

//     const { title, body } = payload?.notification || {};
//     if (title && body) {
//         self.registration.showNotification(title, { body });
//     }
// });
// self.addEventListener('install', (event) => {
//     console.log(event);
// });
// console.log('firebase-messaging-sw.js loaded');

// messaging.setBackgroundMessageHandler(function (payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);

//     // Do you AJAX request here.

//     // Customize and show your notification
//     const notificationTitle = payload.data.title;
//     const notificationOptions = {
//         body: payload.data.body,
//         icon: payload.data.icon,
//     };

//     return self.registration.showNotification(notificationTitle, notificationOptions);
// });
