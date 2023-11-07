import Materas from "../Letrero/MATERAS2.png";
import validarFormulario2 from "./validarlogup";
import validarContrasena from "./validarcontralogup";

function FormLogup() {
    return (
        <div class="col-md-12">
        <div class="card mt-3">
          <div class="card-header text-center">
            <img src={Materas} alt={Materas}></img>
            <h3 class="text-center">Te queremos conocer, por eso cuéntanos:</h3>
          </div>
          <div class="card-body">
            <form onSubmit={validarFormulario2}>
              <div class="form-group">
                <label for="name">Nombre</label>
                <input type="name" name="name" class="form-control" id="name" placeholder="Escribe aquí tu nombre" required></input>
              </div>
              <div class="form-group">
                <label for="lastname">Apellidos</label>
                <input type="lastname" name="lastname" class="form-control" id="lastname" placeholder="Escribe aquí tus apellidos" required></input>
              </div>
              <div class="form-group">
                <label for="password1">Contraseña</label>
                <input type="password" name="password1" class="form-control" id="password1" placeholder="Escribe aquí tu contraseña" required onInput={validarContrasena}></input>
              </div>
              <div class="form-group">
                <label for="password2">Confirma tu contraseña</label>
                <input type="password" name="password2" class="form-control" id="password2" placeholder="Escribe aquí otra vez tu contraseña" required onInput={validarContrasena}></input>
              </div>
              <div id="mensaje-contrasena"></div>
              <div class="form-group">
                <label for="email">Correo electrónico</label>
                <input type="email" name="email" class="form-control" id="email" placeholder="Escribe aquí tu correo electrónico" required></input>
              </div>
              <button type="submit" class="btn btn-outline-secondary">Registrar</button>
            </form>
          </div>
          <div class="card-footer text-center">
            <p>Cuidamos todos los datos que nos compartes</p>
          </div>
        </div>
      </div>
    );
}

export default FormLogup;