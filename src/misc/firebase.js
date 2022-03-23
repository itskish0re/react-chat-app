import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyA-6KZbB5YxLLDXLkP71fAjlI2nVMSde8g",
  authDomain: "react-chat-app-da396.firebaseapp.com",
  projectId: "react-chat-app-da396",
  storageBucket: "react-chat-app-da396.appspot.com",
  messagingSenderId: "776399885762",
  appId: "1:776399885762:web:ef5766db41e3717c9d325b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
