document.querySelector("#boton-ingreso").onclick = function (){
    let primerNombre = document.querySelector("#primer-nombre-usuario").value;
    let segundoNombre = document.querySelector("#segundo-nombre-usuario").value;
    let apellido = document.querySelector("#apellido-usuario").value;
    let nombreUsuario = `${primerNombre} ${segundoNombre} ${apellido}`;

    document.querySelector("h1").innerText = `Bienvenido, ${nombreUsuario}!`;
    return false;
}