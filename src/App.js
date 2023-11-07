import './App.css';
import Index from './Rutas/index';
import Login from './Rutas/login';
import Logup from './Rutas/logup';
import Home from './Rutas/home';
import Admin from './Rutas/admin';
import React from 'react';

function App() {
  return (
    <div>
      <Admin></Admin>
      <Index></Index>
      <Home></Home>
      <Login></Login>
      <Logup></Logup>
    </div>
  );
}


export default App;
