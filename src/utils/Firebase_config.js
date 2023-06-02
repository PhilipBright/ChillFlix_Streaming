// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoUm1EjK_tVDuvJxnI1gBH1Z7AtJciBpA",
  authDomain: "streamingdev-66f96.firebaseapp.com",
  projectId: "streamingdev-66f96",
  storageBucket: "streamingdev-66f96.appspot.com",
  messagingSenderId: "496652182803",
  appId: "1:496652182803:web:299b68cce1acd59a60e6e6",
  measurementId: "G-EYBY40J9HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
