import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_FHFNYgauiaF9bPoLTGd9ZbIg6omh1aQ",
  authDomain: "miniblog-27f96.firebaseapp.com",
  projectId: "miniblog-27f96",
  storageBucket: "miniblog-27f96.appspot.com",
  messagingSenderId: "550513857794",
  appId: "1:550513857794:web:e4c0c41e19c4a036401e1b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };