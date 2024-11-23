//* Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

//* Add the Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8oXp5Chq-gTCwv4Hw5CmJMW4gJhn9ph0",
  authDomain: "bitt-cat.firebaseapp.com",
  projectId: "bitt-cat",
  storageBucket: "bitt-cat.firebasestorage.app",
  messagingSenderId: "674796099927",
  appId: "1:674796099927:web:b027c521c8046730318612",
};

//* Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//* Initialize Firebase Auth and set persistence
const auth = getAuth(firebase_app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Failed to set session persistence:", error);
  });

export { auth };
export default firebase_app;
