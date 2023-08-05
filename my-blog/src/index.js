import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyCcGGvxzTrSxl8-FUuTmQSSR9noREBsvXU",
  authDomain: "my-react-blog-acc26.firebaseapp.com",
  projectId: "my-react-blog-acc26",
  storageBucket: "my-react-blog-acc26.appspot.com",
  messagingSenderId: "433277049350",
  appId: "1:433277049350:web:6305642458cdd0ba890187"
};

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
