import NaveBar from "../NaveBar/navebar";
import Foot from "../Foot/foot";

function Login(){
    return(
         <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 fullscreen-image">

      </div>
      <div class="col-md-6">
        <div class="card mt-5">
          <div class="card-header">
            <h3 class="text-center">¡Qué felicidad que te unas!</h3>
            <img src="LATERAL.png" width="100%"></img>
          </div>
          <div class="card-body">
            <form onsubmit="validarFormulario(event)">
              <div class="form-group">
                <label for="email">Correo Electrónico</label>
                <input type="email" name="email" class="form-control" id="email" placeholder="Escribe aquí tu correo electrónico" required></input>
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

export default function validarFormulario(event){
    event.preventDefault();
    let password = document.getElementById("password").value;
    //Restricciones dependiendo de la contraseña elegida por el usuario

    if(password.length >= 8) {
        alert ("Contraseña correcta")
    }
    else {
        alert ("Contraseña muy corta")
    }
}
