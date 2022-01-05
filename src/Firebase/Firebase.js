import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC8NxrL_oRYFf17eg8_dm9bGEg5zFD7OA4",
    authDomain: "fir-2f15d.firebaseapp.com",
    projectId: "fir-2f15d",
    storageBucket: "fir-2f15d.appspot.com",
    messagingSenderId: "437540658774",
    appId: "1:437540658774:web:53e955772cfe3a6c2225f7",
    measurementId: "G-LVSPW1TP6Y"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth();


function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

export { auth, signIn, signUp }

export default db