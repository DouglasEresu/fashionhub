// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLeSb8071n_ZoeTTBS-w4a96uH9C9gvNw",
  authDomain: "fashion-hub-b862b.firebaseapp.com",
  projectId: "fashion-hub-b862b",
  storageBucket: "fashion-hub-b862b.appspot.com",
  messagingSenderId: "593802734890",
  appId: "1:593802734890:web:d6729c8724fbfeba860253",
  measurementId: "G-JLPB1H31QC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const db = getFirestore(app);
// export const db = getFirestore(app);
