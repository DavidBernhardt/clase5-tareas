function probarAcomodarTiempos(){
    console.assert (acomodarTiempos (0, 60, 60)[0] === 1,
        "acomodarTiempos() no asigna las unidades de tiempo correctamente"
    );
    console.assert (acomodarTiempos(0 ,61, 61)[1] == 2,
        "acomodarTiempos() no asigna las unidades de tiempo correctamente"
    );
}
probarAcomodarTiempos();

document.querySelector("#calcular-tiempo").onclick = function (event){
    event.preventDefault();

    const $horasVideo = document.querySelectorAll(".horas");
    const $minutosVideo = document.querySelectorAll(".minutos");
    const $segundosVideo = document.querySelectorAll(".segundos");

    let horasTotal = 0, minutosTotal = 0, segundosTotal = 0;
    for (let i=0; i<$segundosVideo.length; i++){ //Sumo los tres arrays por separado
        segundosTotal += Number($segundosVideo[i].value);
        minutosTotal += Number($minutosVideo[i].value);
        horasTotal += Number($horasVideo[i].value);
    }


    let tiempoTotal = acomodarTiempos (horasTotal, minutosTotal, segundosTotal);

    if (validarTiempo (tiempoTotal)){
        horasTotal = tiempoTotal[0];
        minutosTotal = tiempoTotal[1];
        segundosTotal = tiempoTotal[2];

        mostrar (horasTotal, minutosTotal, segundosTotal);
    }   
}

function acomodarTiempos (horas, minutos, segundos){
    let tiempo = [];

    minutos += Math.floor(segundos/60); //Sumo un minuto cada 60 segundos
    segundos = segundos%60; //Asigno los segundos restantes
    horas += Math.floor(minutos/60); //Sumo una hora hora cada 60 minutos
    minutos = minutos%60; //Asigno los minutos restantes

    tiempo = [horas, minutos, segundos];
    return tiempo;
}

function mostrar (horasTotal, minutosTotal, segundosTotal){
    document.querySelector("#tiempo-total").innerText = `DURACION TOTAL: ${horasTotal}Hs ${minutosTotal}' ${segundosTotal}''`;
    return;
}

function validarTiempo (tiempo){
    for (let i=0; i < tiempo.length; ++i){
        num = tiempo[i];

        if (isNaN (num) || num === undefined || num === null){
            console.log ("Un campo de tiempo contiene un valor invalido.");
            return false;
        }
    }
    return true;
}
