document.querySelector('#calcular-salario-mensual').onclick = function(event){
    event.preventDefault();

    const salarioAnual = Number(document.querySelector('#salario-anual').value);
    if (validarSalario (salarioAnual)){
        const salarioMensual = calcularSalarioMensual(salarioAnual);

        document.querySelector('#salario-mensual').value = salarioMensual;
    }
}

function calcularSalarioMensual(salarioAnual){
    return salarioAnual / 12;
}

function validarSalario(salario){
    if (salario <= 0){
        console.log ("Ha ingresado un salario negativo o nulo.");
        return false;
    }
    return true;
}
