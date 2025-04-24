let operador = prompt('Ingrese operador (Claro, Tigo o Movistar):').trim();
let minutosInternacionales = Number(prompt('Ingrese minutos internacionales consumidos:'), 10);
let paquetededtos = prompt(`quiere adquirir paquete de datos(si/no):`).trim()
let tarifas = {
    Tigo: { cargoFijo: 45000, valorMinuto: 200, paqueteDatos: 12000 },
    Claro: { cargoFijo: 30000, valorMinuto: 100, paqueteDatos: 18000 },
    Movistar: { cargoFijo: 40000, valorMinuto: 250, paqueteDatos: 8000 }
};

if (tarifas[operador] && !isNaN(minutosInternacionales) && minutosInternacionales >= 0) {
    let { cargoFijo, valorMinuto, paqueteDatos } = tarifas[operador];
    let totalCosto = cargoFijo + (valorMinuto * minutosInternacionales) + paqueteDatos;
    
    alert(`Costo total para ${operador} con ${minutosInternacionales} minutos internacionales: $${totalCosto}`);
} else {
    alert('Operador no válido o minutos ingresados incorrectamente.');
}