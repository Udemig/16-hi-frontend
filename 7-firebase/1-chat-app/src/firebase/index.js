// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//! Firebase Auth Importları
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "hi-chat-4e751.firebaseapp.com",
  projectId: "hi-chat-4e751",
  storageBucket: "hi-chat-4e751.firebasestorage.app",
  messagingSenderId: "64605586995",
  appId: "1:64605586995:web:db258bff131c570cec4546",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! Auth Servisinin Referansını Al
export const auth = getAuth(app);

//! Google Sağlaycısının Kurulumu
export const provider = new GoogleAuthProvider();

//! Veritabanı Servisinin Referansını Al
export const db = getFirestore(app);
