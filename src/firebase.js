import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUV7ws8P8BOEmaGCfcP3nMbPS7g-Zyh6U",
  authDomain: "apps-7d328.firebaseapp.com",
  projectId: "apps-7d328",
  storageBucket: "apps-7d328.appspot.com",
  messagingSenderId: "161963942581",
  appId: "1:161963942581:web:a5456047891b659c0394fc",
  measurementId: "G-X1PFHNZRCK"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
