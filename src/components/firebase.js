// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFNsiI2fcsubc8VUQoSbmeJkD98MION9A",
    authDomain: "netflixgpt-a169b.firebaseapp.com",
    projectId: "netflixgpt-a169b",
    storageBucket: "netflixgpt-a169b.appspot.com",
    messagingSenderId: "602307300441",
    appId: "1:602307300441:web:ec15b9c31d74bd541eb548",
    measurementId: "G-VM31E8Y58T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();