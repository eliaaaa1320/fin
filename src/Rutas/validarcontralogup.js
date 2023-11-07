//Para validar la contraseña
function validarContrasena(event) {
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const mensajeContrasena = document.getElementById("mensaje-contrasena");

    if (password1 === password2) {
        mensajeContrasena.innerHTML = "Las contraseñas son iguales";
        mensajeContrasena.style.color = "green";
    } else {
        mensajeContrasena.innerHTML = "Las contraseñas no son iguales";
        mensajeContrasena.style.color = "red";
    }
}

export default validarContrasena;