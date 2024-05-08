import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBWfELieLOlrh3Xxc0ly0oRwrws55K516o",
    authDomain: "talkin-tummy.firebaseapp.com",
    projectId: "talkin-tummy",
    storageBucket: "talkin-tummy.appspot.com",
    messagingSenderId: "299832064943",
    appId: "1:299832064943:web:7a3f0b974f688980d2cd5a",
    measurementId: "G-XBEZ7ZRNJ7"
};

export const app = initializeApp(firebaseConfig);