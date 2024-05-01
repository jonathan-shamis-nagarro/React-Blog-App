import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6oaekxL6To4q5lTgRJOqUfhT2zRfr8q8",
  authDomain: "my-react-blog-d8dda.firebaseapp.com",
  projectId: "my-react-blog-d8dda",
  storageBucket: "my-react-blog-d8dda.appspot.com",
  messagingSenderId: "685714183391",
  appId: "1:685714183391:web:f683fb30ca30e3ce27056a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
