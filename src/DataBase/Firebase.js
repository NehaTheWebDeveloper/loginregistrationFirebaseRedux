// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBOZwr5RqLwsBXwoNeUmNOVvERrU4EgCOc",
  authDomain: "fir-authentication-175cf.firebaseapp.com",
  projectId: "fir-authentication-175cf",
  storageBucket: "fir-authentication-175cf.appspot.com",
  messagingSenderId: "1071268236577",
  appId: "1:1071268236577:web:1e072eaa2dda17d2c14260"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app