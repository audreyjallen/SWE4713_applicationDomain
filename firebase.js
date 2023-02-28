// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGlZ_i8DyArUH-Wb1lzR4OJOlugUTeCsU",
  authDomain: "swe4713appdom.firebaseapp.com",
  projectId: "swe4713appdom",
  storageBucket: "swe4713appdom.appspot.com",
  messagingSenderId: "272881689377",
  appId: "1:272881689377:web:9ec65ac9182ac99dd99460",
  measurementId: "G-RMW1HL4M1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
