// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz1D2SBRufXmltFQr315UHG-iPBYGDkeo",
  authDomain: "realtor-clone-react-c26aa.firebaseapp.com",
  projectId: "realtor-clone-react-c26aa",
  storageBucket: "realtor-clone-react-c26aa.appspot.com",
  messagingSenderId: "633081107626",
  appId: "1:633081107626:web:183fbbbf58713365396cd3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()