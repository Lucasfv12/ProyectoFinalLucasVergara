// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBW--1Zo8TWPntwYnISgjK8jIQs7NTgSjw",
    authDomain: "ecommercejuegos.firebaseapp.com",
    projectId: "ecommercejuegos",
    storageBucket: "ecommercejuegos.firebasestorage.app",
    messagingSenderId: "915551153321",
    appId: "1:915551153321:web:0555a9f5dc24ef367d8db8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)