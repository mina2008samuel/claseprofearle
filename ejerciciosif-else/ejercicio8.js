let dias = parseInt(prompt('Ingrese la cantidad de días (15, 30 o 90):'));
let costo;

if (dias === 15) {
    costo = 18000;
} else if (dias === 30) {
    costo = 35000;
} else if (dias === 90) {
    costo = 86000;
} else {
    costo = "Dato inválido"; // Manejo de entradas incorrectas
}

alert(`El costo por ${dias} días es: $${costo}`);
