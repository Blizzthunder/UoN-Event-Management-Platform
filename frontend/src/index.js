import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCVnL503WnzOP6f_oAPWLJoZbsjy1qJpSo",
  authDomain: "event-management-platfor-b8632.firebaseapp.com",
  projectId: "event-management-platfor-b8632",
  storageBucket: "event-management-platfor-b8632.firebasestorage.app",
  messagingSenderId: "835415723934",
  appId: "1:835415723934:web:2c5286b5065706789bd08f"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
