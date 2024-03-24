import { initializeApp } from "firebase/app";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInAnonymously,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwCNhkrUAgxLyTd8K4tcz_-KzFSrj4RZA",
  authDomain: "netflix-clone-243fe.firebaseapp.com",
  projectId: "netflix-clone-243fe",
  storageBucket: "netflix-clone-243fe.appspot.com",
  messagingSenderId: "1064254860846",
  appId: "1:1064254860846:web:50e4fe8f84722392eef9bf",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
export const auth = getAuth();

export const createAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => signOut(auth);

export const handleAnonymousLogin = async () => {
  try {
    const userCredential = await signInAnonymously(auth);
    return userCredential;
  } catch (error) {
    throw new Error("Error signing in anonymously: " + error.message);
  }
};
