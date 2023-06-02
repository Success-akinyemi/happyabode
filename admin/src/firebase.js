// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3dB3wlKTflqrVt0VzV_rteyc2pOlacLw",
  authDomain: "success-clone.firebaseapp.com",
  databaseURL: "https://success-clone-default-rtdb.firebaseio.com",
  projectId: "success-clone",
  storageBucket: "success-clone.appspot.com",
  messagingSenderId: "189431815177",
  appId: "1:189431815177:web:b557183d5a41ea0b982cd8",
  measurementId: "G-RP54NEW1GK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;