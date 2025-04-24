function calcularSalario() {
    let nombre = prompt('Ingrese nombre:');
    let horas = parseInt(prompt('Ingrese horas:'));
    let tarifa = horas <= 10 ? 30000 : 33000;
    let salario = horas * tarifa;
    alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}.`);
}