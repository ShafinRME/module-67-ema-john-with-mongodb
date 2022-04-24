// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2ue3xLTSrozOfgjeti6xNnNqiAm7hgK4",
  authDomain: "ema-john-simple-2d5b1.firebaseapp.com",
  projectId: "ema-john-simple-2d5b1",
  storageBucket: "ema-john-simple-2d5b1.appspot.com",
  messagingSenderId: "771146129391",
  appId: "1:771146129391:web:86288c66922ab253eba01a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
