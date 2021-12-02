import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBitjT2CqQXcrawqPNqqcDuejIp9yDmMfA",
    authDomain: "test-ctl-39514.firebaseapp.com",
    projectId: "test-ctl-39514",
    storageBucket: "test-ctl-39514.appspot.com",
    messagingSenderId: "927807168780",
    appId: "1:927807168780:web:cc8c0e556eebebeee8e929",
    measurementId: "G-7CRRDTNZCX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);