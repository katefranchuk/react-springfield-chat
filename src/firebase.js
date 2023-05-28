import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpgZjK45eTVVWpbwQIKqQ-jmDiQ7MhVy0",
  authDomain: "springfieldchat.firebaseapp.com",
  projectId: "springfieldchat",
  storageBucket: "springfieldchat.appspot.com",
  messagingSenderId: "753700354771",
  appId: "1:753700354771:web:c3b87a110468856178b226",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID
// };
