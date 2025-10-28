// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebase_api_key } from "./constants";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: firebase_api_key,
  authDomain: "vintube-4eb4c.firebaseapp.com",
  projectId: "vintube-4eb4c",
  storageBucket: "vintube-4eb4c.firebasestorage.app",
  messagingSenderId: "248704042061",
  appId: "1:248704042061:web:34d058f315c6f6cfd98804",
  measurementId: "G-4ZHEFRYT0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();