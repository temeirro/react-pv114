import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from './contexts/AuthContext';
// import CounterProvider from './contexts/counterContext';
import CounterProvider from './contexts/counterContextWithReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      {/* instaling =>     npm i react-router-dom */}
      {/* <BrowserRouter> */}
      <Router>
      {/* <ThemeProvider> */}
      
      <CounterProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
        </CounterProvider>
        {/* </ThemeProvider> */}
      </Router>
      {/* </BrowserRouter> */}
    </React.StrictMode>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
