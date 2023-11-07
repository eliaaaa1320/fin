function validarFormulario2 (event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    //Restricciones dependiendo de la información que el usuario escriba
    if(name.length >= 3) {
        alert("Nombre guardado correctamente")
    }
    else {
        alert("El nombre es demasiado corto")
    }

    event.preventDefault();
    let lastname = document.getElementById("lastname").value;
    //Restricciones dependiendo de la información que el usuario escriba
    if(lastname.length >= 3) {
        alert("Apellido guardado correctamente")
    }
    else {
        alert("El apellido es demasiado corto")
    }

    event.preventDefault();
    let password1 = document.getElementById("password1").value;
    //Restricciones dependiendo de la información que el usuario escriba
    if(password1.length >= 8) {
        alert("Contraseña guardada correctamente")
    }
    else {
        alert("La contraseña debe contener más de 8 caracteres")
    }
   }

export default validarFormulario2;
