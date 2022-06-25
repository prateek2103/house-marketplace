import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLS48NiepYRK8LUFzwrzVU404I-189XiA",
  authDomain: "house-marketplace-33377.firebaseapp.com",
  projectId: "house-marketplace-33377",
  storageBucket: "house-marketplace-33377.appspot.com",
  messagingSenderId: "456392818214",
  appId: "1:456392818214:web:02cb0d6e8f85ddc6e530e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
