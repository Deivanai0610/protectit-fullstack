import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKS6kpmesSD4muc1Y4pjHqoioDbheo6m0",
  authDomain: "protectit-f52d2.firebaseapp.com",
  projectId: "protectit-f52d2",
  storageBucket: "protectit-f52d2.firebasestorage.app",
  messagingSenderId: "264191513470",
  appId: "1:264191513470:web:c1223a3f6645383c40192f",
  measurementId: "G-N56NNKKZ4E"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);