import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyC5aja9hYd_Clp_0Bt_bGT6ovNXx1yPPQ0",
  authDomain: "foodbridgereact.firebaseapp.com",
  projectId: "foodbridgereact",
  storageBucket: "foodbridgereact.appspot.com",
  messagingSenderId: "893518816027",
  appId: "1:893518816027:web:7f1eaa34106d82b346a9be",
  measurementId: "G-EE1B9397L3"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
