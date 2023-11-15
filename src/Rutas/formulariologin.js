import "./styleformlogin.css";
import Lateral1 from "../Letrero/LATERAL.png";
import validarFormulario from "../Rutas/validarlogin";
import React, { useState } from "react";

function FormLogin () {

  function handleFormSubmit(event) {
    event.preventDefault();
    validarFormulario(event);
    //Validar envío de información pa que se vea en la consola
    enviarFormulario();
  
    // Verificar si el formulario es válido antes de enviar la solicitud
    if (formularioEsValido()) {
      fetch("/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: document.getElementById("username").value,
          password: document.getElementById("password").value,
        }),
      });
    }
  }
  
  function formularioEsValido() {
    // Realiza tus validaciones del formulario aquí
    // Si el formulario es válido, retorna true; de lo contrario, retorna false

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "" || password === "") {
      alert("Los campos de usuario y contraseña son obligatorios.");
      return false;
    }
  
    return true; // El formulario es válido
  }
  
  //Recolección de información con JSON

  const [formData, setFormData] = useState ({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData({
      ... formData,
      [name]: value,
    });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    console.log(formData);

    fetch("localhost/Login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };
//Recolección terminada

    return(
        <div className="container-fluid">
   <div className="row">
     <div className="col-md-6 fullscreen-image">

     </div>
     <div className="col-md-6">
       <div className="card mt-5">
         <div className="card-header">
           <h3 className="text-center">¡Qué felicidad que te unas!</h3>
           <img src={Lateral1} alt={Lateral1} width="100%"></img>
         </div>
         <div className="card-body">
           <form onSubmit={handleFormSubmit}>
             <div className="form-group">
               <label htmlFor="email">Correo Electrónico</label>
               <input type="email" name="email" className="form-control" id="username" placeholder="Escribe aquí tu correo electrónico" required value={formData.username} onChange={handleInput}></input>
             </div>
             <div className="form-group">
               <label htmlFor="password">Contraseña</label>
               <input type="password" name="password" className="form-control" id="password" placeholder="Escribe aquí tu contraseña" required value={formData.password} onChange={handleInput}></input>
             </div>
             <div className="form-group">
               <a href="#" className="small">¿Olvidaste la contraseña? No te preocupes, acá te ayudamos</a>
             </div>
             <button type="submit" className="btn btn-outline-secondary">Registrar</button>
           </form>
         </div>
         <div className="card-footer text-center">
           <p>¿Ya tienes una cuenta? <a href="#">Inicia sesión aquí</a></p>
         </div>
       </div>
     </div>
   </div>
 </div>
   );
    }

export default FormLogin;