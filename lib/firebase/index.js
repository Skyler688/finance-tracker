// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgeCezlRMCNx7iptaMH8I76w1dW0SHTgQ",
  authDomain: "finance-tracker-43aff.firebaseapp.com",
  projectId: "finance-tracker-43aff",
  storageBucket: "finance-tracker-43aff.firebasestorage.app",
  messagingSenderId: "282180299504",
  appId: "1:282180299504:web:67ca4ab8e61aed4652f035",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
