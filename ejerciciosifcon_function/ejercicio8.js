function calcularCostoEstancia() {
    let dias = parseInt(prompt('Ingrese la cantidad de días (15, 30 o 90):'));
    let costo = dias === 15 ? 18000 : dias === 30 ? 35000 : dias === 90 ? 86000 : "Dato inválido";
    alert(`El costo por ${dias} días es: $${costo}`);
}