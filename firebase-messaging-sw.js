importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAoS_7Kvc8_yv4q_1wvQvgf8jKcI2VnLcc",
  authDomain: "ccict-smart-intercom.firebaseapp.com",
  databaseURL: "https://ccict-smart-intercom-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ccict-smart-intercom",
  storageBucket: "ccict-smart-intercom.firebasestorage.app",
  messagingSenderId: "735339405583",
  appId: "1:735339405583:web:18472090d3036445bbde7a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification || {};
  self.registration.showNotification(title || 'CCICT Intercom', {
    body: body || 'Incoming call from intercom node.',
    icon: '/favicon.ico',
    tag: 'ccict-intercom-call',
    requireInteraction: true
  });
});
