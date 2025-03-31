// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Colar a string de conexão
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuUhJJnJ-e7bYN9mThHYPsuwhBvkoWKAM",
  authDomain: "vito-damii.firebaseapp.com",
  projectId: "vito-damii",
  storageBucket: "vito-damii.firebasestorage.app",
  messagingSenderId: "323649241355",
  appId: "1:323649241355:web:cb5594d0211c409138220e"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export {auth, firestore, storage};  