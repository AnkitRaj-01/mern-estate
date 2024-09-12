// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5e89c.firebaseapp.com",
  projectId: "mern-estate-5e89c",
  storageBucket: "mern-estate-5e89c.appspot.com",
  messagingSenderId: "622078593684",
  appId: "1:622078593684:web:099a18a67759da6a1d0281"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);