function calcularPrecioCopias() {
    let copias = parseInt(prompt('Ingrese copias:'));
    let precio = copias >= 1000 ? 50 : copias >= 750 ? 80 : copias >= 500 ? 100 : 120;
    alert(`Precio por copia: $${precio}, Precio total: $${precio * copias}`);
}