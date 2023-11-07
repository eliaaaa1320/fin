import './App.css';
import Index from './Rutas/index';
import Login from './Rutas/login';
import Logup from './Rutas/logup';
import Home from './Rutas/home';
import Admin from './Rutas/admin';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={Login}></Route>
      <Route path="/index" element={Index}></Route>
      <Route path="/logup" element={Logup}></Route>
      <Route path="/home" element={Home}></Route>
      <Route path="/admin" element={Admin}></Route>
    </Routes>
    </BrowserRouter>
  );
}


export default App;
