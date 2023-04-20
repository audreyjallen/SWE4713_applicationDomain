import { initializeApp } from "firebase/app";
import {getFirestore, deleteDoc} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { onAuthStateChanged, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDGlZ_i8DyArUH-Wb1lzR4OJOlugUTeCsU",
  authDomain: "swe4713appdom.firebaseapp.com",
  databaseURL: "https://swe4713appdom-default-rtdb.firebaseio.com",
  projectId: "swe4713appdom",
  storageBucket: "swe4713appdom.appspot.com",
  messagingSenderId: "272881689377",
  appId: "1:272881689377:web:9ec65ac9182ac99dd99460",
  measurementId: "G-RMW1HL4M1B"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export{ deleteDoc, auth, firestore, storage, 
  onAuthStateChanged,
   createUserWithEmailAndPassword,
  signInWithEmailAndPassword};

