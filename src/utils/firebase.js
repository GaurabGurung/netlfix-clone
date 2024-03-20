import { initializeApp } from "firebase/app";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc, //methods for pulling a document
  getDoc, // method to get a file inside the documnet
  setDoc, // method to set a file inside the document
  collection, // mostly used to create or target a specific collection
  writeBatch, // creates a batch and writes a document using multiple methods to make it successfully
  query, //to find documents with some specification
  getDocs,
} from "firebase/firestore";

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
