import "./styleformlogin.css";
import Lateral1 from "../Letrero/LATERAL.png";
import validarFormulario from "../Rutas/validarlogin";

function FormLogin () {

  function handleFormSubmit(event) {
    event.preventDefault();
    validarFormulario(event);
  
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
  
  

    return(
        <div class="container-fluid">
   <div class="row">
     <div class="col-md-6 fullscreen-image">

     </div>
     <div class="col-md-6">
       <div class="card mt-5">
         <div class="card-header">
           <h3 class="text-center">¡Qué felicidad que te unas!</h3>
           <img src={Lateral1} alt={Lateral1} width="100%"></img>
         </div>
         <div class="card-body">
           <form onSubmit={handleFormSubmit}>
             <div class="form-group">
               <label for="email">Correo Electrónico</label>
               <input type="email" name="email" class="form-control" id="username" placeholder="Escribe aquí tu correo electrónico" required></input>
             </div>
             <div class="form-group">
               <label for="password">Contraseña</label>
               <input type="password" name="password" class="form-control" id="password" placeholder="Escribe aquí tu contraseña" required></input>
             </div>
             <div class="form-group">
               <a href="#" class="small">¿Olvidaste la contraseña? No te preocupes, acá te ayudamos</a>
             </div>
             <button type="submit" class="btn btn-outline-secondary">Registrar</button>
           </form>
         </div>
         <div class="card-footer text-center">
           <p>¿Ya tienes una cuenta? <a href="#">Inicia sesión aquí</a></p>
         </div>
       </div>
     </div>
   </div>
 </div>
   );
    }

export default FormLogin;