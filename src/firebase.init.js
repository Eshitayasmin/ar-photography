// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCspsRobDb7dU0ifKq985uIF1Jk0UvP6q0",
  authDomain: "ar-photography-73631.firebaseapp.com",
  projectId: "ar-photography-73631",
  storageBucket: "ar-photography-73631.appspot.com",
  messagingSenderId: "281199442466",
  appId: "1:281199442466:web:d8986992ef5521c0efe87b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;