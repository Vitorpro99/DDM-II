// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIRdekE1RsZz2dvxn1OFoxPZM7dN1OKW4",
  authDomain: "mini-frota.firebaseapp.com",
  projectId: "mini-frota",
  storageBucket: "mini-frota.firebasestorage.app",
  messagingSenderId: "995327100543",
  appId: "1:995327100543:web:1df97055a993c9bd75a14a",
  measurementId: "G-Y54YH5D2CH"
};

// Initialize Firebase
let app;
if(firebase.app.lenght === 0){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app;
}

const auth      = firebase.auth();
const firestore = firebase.store();
// const storage   = firebase.storage();

// export {auth,firestore,storage};
export {auth,firestore};