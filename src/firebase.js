import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcDZmfszJbVomOQSNeh-AI-VA0gobjvwM",
  authDomain: "realtor-clone-website.firebaseapp.com",
  projectId: "realtor-clone-website",
  storageBucket: "realtor-clone-website.appspot.com",
  messagingSenderId: "977215946133",
  appId: "1:977215946133:web:b114863feb20bca18f4a9c"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();