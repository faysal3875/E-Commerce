// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyADcDtOsczrjRTFzeFvvpR3T9Kahu74VoE",
  authDomain: "clone-d2b78.firebaseapp.com",
  projectId: "clone-d2b78",
  storageBucket: "clone-d2b78.appspot.com",
  messagingSenderId: "406646981994",
  appId: "1:406646981994:web:b079a864ddfbaa9d159113",
  measurementId: "G-3BX1952H4C",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
