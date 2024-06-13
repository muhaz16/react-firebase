import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqgmTgyE0LHDQzakfppM2bzuf4nj2eoFs",
  authDomain: "rnauth-28c4e.firebaseapp.com",
  projectId: "rnauth-28c4e",
  storageBucket: "rnauth-28c4e.appspot.com",
  messagingSenderId: "10588278015",
  appId: "1:10588278015:web:5737e8f212516f3b7dd0ca"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

