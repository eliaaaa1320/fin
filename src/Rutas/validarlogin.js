function validarFormulario(event){
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

export default validarFormulario;