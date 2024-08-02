// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAEZBzL00KB3rcvLem8zwa1erNvIqlZSRs",
  authDomain: "totality-e955d.firebaseapp.com",
  projectId: "totality-e955d",
  storageBucket: "totality-e955d.appspot.com",
  messagingSenderId: "595037396818",
  appId: "1:595037396818:web:c0762d74f5963d50d7248b"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
