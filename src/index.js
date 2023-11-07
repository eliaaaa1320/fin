import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Rutas/login';
import Logup from './Rutas/logup';
import Index from './Rutas/index';
import Admin from './Rutas/admin';
import Home from './Rutas/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/index" element={<Index/>}></Route>
      <Route path="/logup" element={<Logup/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
