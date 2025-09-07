import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAT-fLnKw8aTvj2dE4SIxnoyj-ZhodrkzI",
  authDomain: "full-stack-react-57276.firebaseapp.com",
  projectId: "full-stack-react-57276",
  storageBucket: "full-stack-react-57276.firebasestorage.app",
  messagingSenderId: "40135990416",
  appId: "1:40135990416:web:231e2866ecd7799363cc15"
};

const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
