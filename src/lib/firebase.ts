
// This file is now configured for a real Firebase project.
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, setDoc, doc, addDoc, updateDoc, deleteDoc, serverTimestamp, onSnapshot, Timestamp, query, where, limit, orderBy, runTransaction, FieldValue, increment, writeBatch } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCsqRehPuJ5QD0xny_ymMGDrXY_QvL_2eU",
  authDomain: "my-manager-copy.firebaseapp.com",
  projectId: "my-manager-copy",
  storageBucket: "my-manager-copy.firebasestorage.app",
  messagingSenderId: "949158889241",
  appId: "1:949158889241:web:a49572d67458e3d5852788"
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
