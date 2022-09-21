// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8FASPRF5rEtjyGl7X-YL7SkHmflwg7tA",
  authDomain: "safo-1983.firebaseapp.com",
  projectId: "safo-1983",
  storageBucket: "safo-1983.appspot.com",
  messagingSenderId: "948346066698",
  appId: "1:948346066698:web:6e84209713165015aeccf3",
  measurementId: "G-N5JTX5H4KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)