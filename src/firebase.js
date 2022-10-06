import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjFDojQRHZdVIReN4AtLTihJSI40BEsFw",
  authDomain: "slack-clone-8e0af.firebaseapp.com",
  projectId: "slack-clone-8e0af",
  storageBucket: "slack-clone-8e0af.appspot.com",
  messagingSenderId: "118495841387",
  appId: "1:118495841387:web:4e8e8620ce94a5720f752e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
