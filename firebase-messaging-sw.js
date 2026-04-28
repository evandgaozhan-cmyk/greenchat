importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnDdfNeNhS5oYYYNkESOZHCYbwe3boY2Q",
  authDomain: "morse-f36e5.firebaseapp.com",
  databaseURL: "https://morse-f36e5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "morse-f36e5",
  storageBucket: "morse-f36e5.firebasestorage.app",
  messagingSenderId: "41752377914",
  appId: "1:41752377914:web:881b1c19c011d6fea0d303",
  measurementId: "G-RLTTLG36SS"
};

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  return self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body
  });
});