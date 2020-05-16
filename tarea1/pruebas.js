function probarValidarSalario(){
    console.assert (validarSalario (-1) === false,
     "validarSalario() no funcionó, acepto un salario negativo inválido.");

    console.assert (validarSalario (0) === false,
    "validarSalario() no funcionó, acepto un salario nulo inválido.");

    console.assert (validarSalario(2020) === true,
    "validarSalario() no funcionó, rechazo un salario positivo válido.");
}
probarValidarSalario();

function probarCalcularSalarioMensual(){
    console.assert (calcularSalarioMensual(12) === 12/12),
    "calcularSalarioAnual() retornó un resultado incorrecto"
}
probarCalcularSalarioMensual()
