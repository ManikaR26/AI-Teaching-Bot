// Firebase Modular SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  collection,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-storage.js";


// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyATN8IucIZs6Y-JJ1OaYkbuwLjUNhrekKM",
  authDomain: "skillswapplus-92841.firebaseapp.com",
  projectId: "skillswapplus-92841",
  storageBucket: "skillswapplus-92841.appspot.com",
  messagingSenderId: "169669516214",
  appId: "1:169669516214:web:62acaa1a358224d655bf17",
  measurementId: "G-92D05JE9CW"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export Everything
export {
  app,
  auth,
  db,
  storage,
  // Auth
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  // Firestore
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  collection,
  query,
  where,
  orderBy,
  serverTimestamp,
  // Storage
  ref,
  uploadBytes,
  getDownloadURL,
};
