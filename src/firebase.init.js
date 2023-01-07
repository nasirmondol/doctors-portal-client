// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  // apiKey: "AIzaSyAbuuZfMMnDmRh5LYqBjSdik4WuPJlWSx8",
  // authDomain: "doctors-portal-989f9.firebaseapp.com",
  // projectId: "doctors-portal-989f9",
  // storageBucket: "doctors-portal-989f9.appspot.com",
  // messagingSenderId: "16479926533",
  // appId: "1:16479926533:web:f4d5ab8a64b288a9b21f6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;