import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgTAO58ZReaPsqyuO5vdyCdYH5Khiu8wE",
  authDomain: "preubas-1f384.firebaseapp.com",
  projectId: "preubas-1f384",
  storageBucket: "preubas-1f384.appspot.com",
  messagingSenderId: "737207411444",
  appId: "1:737207411444:web:6b7ccf260da90b12fef4a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 