import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsR25pJSqjR2YkTqdZ2vaZ5BlyIe56KM8",
  authDomain: "hacknitr495.firebaseapp.com",
  projectId: "hacknitr495",
  storageBucket: "hacknitr495.appspot.com",
  messagingSenderId: "540932722884",
  appId: "1:540932722884:web:a4dd1d82aa18e9e289b991",
};

// ✅ Prevent multiple Firebase initializations
const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = getAuth(app);
