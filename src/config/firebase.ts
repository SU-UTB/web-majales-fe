import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: 'su-majales-7a835.firebaseapp.com',
  projectId: 'su-majales-7a835',
  storageBucket: 'su-majales-7a835.appspot.com',
  messagingSenderId: '524726053488',
  appId: '1:524726053488:web:fcf0ac86d410acf28ae2b5',
  measurementId: 'G-F618ECPXRM',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
