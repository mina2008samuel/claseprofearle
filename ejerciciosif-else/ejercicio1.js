let nombre = prompt('Ingrese nombre:');
let horas = prompt('Ingrese horas:');
let tarifa;
if (horas <= 10) {
    tarifa = 30000;
} else {
    tarifa = 33000;
}
let salario = horas * tarifa;
alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}.`);


