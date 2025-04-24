function calcularCostoLavadoras() {
    let tipoLavadora = parseInt(prompt('Ingrese tipoLavadora:'));
    let cantidad = parseInt(prompt('Ingrese cantidad:'));
    let horasAlquiler = parseInt(prompt('Ingrese horasAlquiler:'));
    let tarifaLavadora = tipoLavadora === 1 ? 4000 : 3000;
    let total = cantidad * horasAlquiler * tarifaLavadora;
    if (cantidad > 3) total *= 0.97;
    alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horasAlquiler} horas: $${total}`);
}