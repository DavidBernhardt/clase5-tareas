function probarValidarSoloLetras(){
    console.assert (validarSoloLetras ("AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz") === true,
        "validarSoloLetras() retorno false ante un string de caracteres compuesto sólo por letras mayusculas y minusculas."
    );
    console.assert (validarSoloLetras ("Ññ") === true,
        "validarSoloLetras() no tomo a la Ñ o ñ como letras validas."
    );
    console.assert (validarSoloLetras (" ") === true,
        "validarSoloLetras() no tomo un espacio como valido."
    );
    console.assert (validarSoloLetras ("0123456789") === false,
        "validarSoloLetras() acepto caracteres numericos"
    );
    console.assert (validarSoloLetras ("^") === false,
        "validarSoloLetras() acepto el caracter ^ (ASCII 94)"
    );
    console.assert (validarSoloLetras ("~") === false,
        "validarSoloLetras() acepto el caracter ~ (ASCII 126)"
    );
}
probarValidarSoloLetras();

function probarValidarEdad(){
    console.assert (validarEdad ("0123456789") === true,
        "validarEdad() no acepto caracteres numericos"
    );
    console.assert (validarEdad ("AaBbCcDdEeFfGgHhIiJjKkLlMmNnÑñOoPpQqRrSsTtUuVvWwXxYyZz") === false,
        "validarEdad() esta aceptando letras como caracteres numéricos."
    );
}
probarValidarEdad();

