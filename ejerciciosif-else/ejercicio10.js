let copias = prompt('Ingrese copias:');
let precio;
if (copias >= 1000) {
    precio = 50;
} else if (copias >= 750) {
    precio = 80;
} else if (copias >= 500) {
    precio = 100;
} else {
    precio = 120;
}
alert(`Precio por copia: $${precio}, Precio total: $${precio * copias}`);
