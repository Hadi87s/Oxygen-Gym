import { initializeApp } from "../../../node_modules/firebase/app";
import { getAuth } from "../../../node_modules/firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
} from "../../../node_modules/firebase/firestore";

// Firebase configuration (from Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDWBisPZ2SBtzUFvhSiR7mAdYUwm2i9HgQ",
  authDomain: "oxygen-gym-2f2b1.firebaseapp.com",
  projectId: "oxygen-gym-2f2b1",
  storageBucket: "oxygen-gym-2f2b1.firebasestorage.app",
  messagingSenderId: "608908646400",
  appId: "1:608908646400:web:9830b16446ce94827360e5",
  measurementId: "G-V3MW0009C0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services
export { auth, db, doc, setDoc };
