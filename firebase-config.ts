import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA7fC-1s4r3hGyoh1AHKjwYtHhf1IOhsyE",
    authDomain: "akhotchips.firebaseapp.com",
    projectId: "akhotchips",
    storageBucket: "akhotchips.firebasestorage.app",
    messagingSenderId: "145897131118",
    appId: "1:145897131118:web:a6ad1f0b6d6a60f3bcea7f",
    measurementId: "G-QP1SB2MWM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, analytics };
