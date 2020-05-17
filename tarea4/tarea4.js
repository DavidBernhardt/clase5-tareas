const $listaNumeros = document.querySelectorAll('li');
console.log($listaNumeros);

let arrayNumeros = [];
for (let i=0; i<$listaNumeros.length; i++){
    let num = Number($listaNumeros[i].textContent);

    if (validarNumero (num)){
        arrayNumeros.push (num);
    }
}

document.querySelector("#calcular-promedio").onclick = function (event){
    event.preventDefault();

    document.querySelector("#promedio").textContent = `El promedio es ${promedio(arrayNumeros)}`;
}

document.querySelector("#calcular-menor-valor").onclick = function (event){
    event.preventDefault(event);

    document.querySelector("#menor-valor").textContent = `El numero más pequeño es ${menorNumero(arrayNumeros)}`;
}

document.querySelector("#calcular-mayor-valor").onclick = function (event){
    event.preventDefault(event);
    document.querySelector("#mayor-valor").textContent = `El numero más grande es ${mayorNumero(arrayNumeros)}`;
    return false;
}

document.querySelector("#calcular-mas-repetido").onclick = function (event){
    event.preventDefault(event);
    document.querySelector("#valor-mas-repetido").textContent = `El numero más frecuente es ${masRepetido(arrayNumeros)}`;
    return false;
}


function promedio (ar){
    let suma = 0;
    for (let i=0; i<ar.length; i++){
        suma = suma + ar[i];
    }
    return suma/ar.length;
}

function menorNumero(ar){
    menor = ar[0];
    for (let i=1; i<ar.length; i++){
        if (ar[i] < menor){
            menor = ar[i]; 
        }
    }
    return menor;
}

function mayorNumero(ar){
    mayor = ar[0];
    for (let i=1; i<ar.length; i++){
        if (ar[i] > mayor){
            mayor = ar[i];
        }
    }
    return mayor;
}

function masRepetido(ar){
    let valoresUnicos=[];
    let masRepetido;
    let repeticionesMax = 0;
    for (let i=0; i<ar.length; i++){
        let nRepeticiones = 0;
        if (!valoresUnicos.includes(ar[i])){
            valoresUnicos.push(ar[i]);
            nRepeticiones = 1;
            for (let j=ar.length-1; j>i; j--){
                if (ar[i] == ar [j]){
                    nRepeticiones++;
                }
            }
            if (nRepeticiones > repeticionesMax){
                repeticionesMax = nRepeticiones;
                masRepetido = ar[i];
            }
        }
    }
    return masRepetido;
}

function validarNumero (num){
    if (isNaN (num) || num === undefined || num === null){
        console.log ("Un numero de la lista presenta un valor invalido");
        return false;
    }
    return true;
}
