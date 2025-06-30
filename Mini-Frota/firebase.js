// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoP3Oe9MW9bcmHk-RjQWsfaZz0uMwZn6A",
  authDomain: "proj1-b3d1f.firebaseapp.com",
  projectId: "proj1-b3d1f",
  storageBucket: "proj1-b3d1f.firebasestorage.app",
  messagingSenderId: "315440443247",
  appId: "1:315440443247:web:932a6f17cca1b2204ac29a"


};

// Inicializar Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}


const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

// Exportar
export { auth, firestore, storage };