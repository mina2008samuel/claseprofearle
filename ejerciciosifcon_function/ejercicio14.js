function calcularCostoSandwich() {
    let tamano = prompt('Ingrese tamano:');
    let ingredientes = prompt('Ingrese ingredientes:');
    let costoBase = tamano === "pequeño" ? 6000 : 12000;
    let costoIngredientes = 0;
    for (let ing of ingredientes) {
        if (ing !== "jalapeño") {
            costoIngredientes += ing === "queso" ? 2500 : 3000;
        }
    }
    alert(`Costo total del sándwich: $${costoBase + costoIngredientes}`);
}

calcularCostoSandwich();