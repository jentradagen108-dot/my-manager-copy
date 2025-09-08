// This file is now configured for a real Firebase project.
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, setDoc, doc, addDoc, updateDoc, deleteDoc, serverTimestamp, onSnapshot, Timestamp, query, where, limit, orderBy, runTransaction, FieldValue, increment, writeBatch } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCjnPt18xXTDk23jb36Rd238ldAvng8Dw",
  authDomain: "concretemix-ai.firebaseapp.com",
  projectId: "concretemix-ai",
  storageBucket: "concretemix-ai.firebasestorage.app",
  messagingSenderId: "521997201606",
  appId: "1:521997201606:web:90f6aca425e572a6f8a7c7"
};

// Initialize Firebase.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { 
    db,
    collection, 
    doc,
    updateDoc,
    deleteDoc,
    setDoc,
    getDocs,
    getDoc,
    addDoc,
    onSnapshot,
    serverTimestamp,
    Timestamp,
    query,
    where,
    limit,
    orderBy,
    runTransaction,
    FieldValue,
    increment,
    writeBatch
};
