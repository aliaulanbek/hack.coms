import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCX3HsIO4vXDoDQxtA8C62WO9qTF65MjkI",
  authDomain: "hack-coms.firebaseapp.com",
  databaseURL: "https://hack-coms-default-rtdb.firebaseio.com",
  projectId: "hack-coms",
  storageBucket: "hack-coms.firebasestorage.app",
  messagingSenderId: "659442283623",
  appId: "1:659442283623:web:9175e4248988c2680f90c2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, GoogleAuthProvider, signInWithPopup, signOut, database };