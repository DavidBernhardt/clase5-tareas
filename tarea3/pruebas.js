function probarAcomodarTiempos(){
    console.assert (acomodarTiempos (0, 61, 61)[0] === 1,
        "acomodarTiempos() no asigna las unidades de tiempo correctamente"
    );
    console.assert (acomodarTiempos(0 ,61, 61)[1] == 2,
        "acomodarTiempos() no asigna las unidades de tiempo correctamente"
    );
    console.assert (acomodarTiempos(0 ,61, 61)[2] == 1,
        "acomodarTiempos() no asigna las unidades de tiempo correctamente"
    );
}
probarAcomodarTiempos();

function probarValidarTiempo (){
    console.assert (validarTiempo ([1234567890, 1234567890, 1234567890]) === true,
        "validarTiempo() rechazo valores numericos validos"
    );
    console.assert (validarTiempo ([null, 59, 59]) === false,
        "validarTiempo() no rechazo un valor null que deberia ser numerico"
    );
    console.assert (validarTiempo ([1, undefined, 59]) === false,
        "validarTiempo() no rechazo un valor undefined que deberia ser numerico"
    );
    console.assert (validarTiempo ([1, 59, NaN]) === false,
        "validarTiempo() no rechazo un valor NaN que deberia ser numerico"
    );
}
probarValidarTiempo();

