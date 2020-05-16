document.querySelector("#boton-ingreso").onclick = function (event){
    event.preventDefault();

    let primerNombre = document.querySelector("#primer-nombre-usuario").value;
    let segundoNombre = document.querySelector("#segundo-nombre-usuario").value;
    let apellido = document.querySelector("#apellido-usuario").value;

    let nombreUsuario = `${primerNombre} ${segundoNombre} ${apellido}`;
    if (validarSoloLetras (nombreUsuario)){
        let edadUsuario = Number(document.querySelector("#edad-usuario").value);

        if (validarEdad (edadUsuario)){
            mostrar (nombreUsuario, edadUsuario);
        }
    }
}

function validarSoloLetras (texto){
    for (let i=0; i < texto.length; ++i){
        char = texto[i].charCodeAt();

        if ((char<65 || char>122) || (char>90 && char<97)){
            if (char !=32 && char!=209 && char!=241){
                console.log ("Solo puede ingresar letras en los campos de nombre o apellido.");
                return false;
            }
        }
    }   
    return true;
}

function validarEdad (edad){
    for (let i=0; i < edad.length; ++i){
        char = edad[i].charCodeAt();

        if ((char<48 || char>58) && (char!=44 && char!= 46)){
            console.log ("Ha ingresado una edad invalida.");
            return false;
        }
    }
    return true;
}

function mostrar (nombreUsuario, edadUsuario){
    document.querySelector("h1").innerText =
     `Bienvenido, ${nombreUsuario}!, tu edad es ${edadUsuario}`;
   
    return false;
}