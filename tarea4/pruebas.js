arPrueba = [2, 7, -4, 2, 3, 3, 8, 3]

function probarPromedio(){
    console.assert (promedio (arPrueba) === 3,
        "promedio() no retorna el resultado correcto."
    );
}
probarPromedio();

function probarMenorNumero(){
    console.assert (menorNumero (arPrueba) === -4,
        "menorNumero() no retorna el menor valor"
    );
}
probarMenorNumero();

function probarMayorNumero(){
    console.assert (mayorNumero (arPrueba) === 8,
        "mayorNumero() no retorna el mayor valor"
    );
}
probarMayorNumero();

function probarMasRepetido(){
    console.assert (masRepetido (arPrueba) === 3,
        "masRepetido() no retorna el valor que mas se repite"
    );
}
probarMasRepetido();

function probarValidarNumero(){
    console.assert (validarNumero (2.718) === true,
        "validarNumero() rechazo un numero valido"
    );
    console.assert (validarNumero (NaN) === false,
        "validarNumero() no rechazo un valor NaN que deberia ser numerico"
    );
    console.assert (validarNumero (null) === false,
        "validarNumero() no rechazo un valor null que deberia ser numerico"
    );
    console.assert (validarNumero (undefined) === false,
        "validarNumero() no rechazo un valor undefined que deberia ser numerico"
    );
}
probarValidarNumero();

