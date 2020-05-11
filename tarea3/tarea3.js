document.querySelector("#calcular-tiempo").onclick = function (){
    const horasVideo = document.querySelectorAll(".horas");
    const minutosVideo = document.querySelectorAll(".minutos");
    const segundosVideo = document.querySelectorAll(".segundos");
    let horasTotal, minutosTotal, segundosTotal;
   
    for (let i=0; i<segundosVideo.length; i++){ //Sumo los tres arrays por separado
        segundosTotal += Number(segundosVideo[i].value);
        minutosTotal += Number(minutosVideo[i].value);
        horasTotal += Number(horasVideo[i].value);
    }
    minutosTotal += Math.floor(segundosTotal/60); //Sumo un minuto cada 60 segundos
    segundosTotal = segundosTotal%60; //Asigno los segundos restantes
    horasTotal += Math.floor(minutosTotal/60); //Sumo una hora hora cada 60 minutos
    minutosTotal = minutosTotal%60; //Asigno los minutos restantes
   
    document.querySelector("#tiempo-total").innerText = `DURACION TOTAL: ${horasTotal}Hs ${minutosTotal}' ${segundosTotal}''`; //Devuelvo el resultado al HTML
    return false;
}
