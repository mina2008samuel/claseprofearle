"use strict";
let productos = [
    { nombre: "Galletas", precio: 10, stock: 3 },
    { nombre: "Refresco", precio: 20, stock: 2 },
    { nombre: "Chocolate", precio: 15, stock: 5 },
    { nombre: "Papas", precio: 12, stock: 1 },
    { nombre: "Caramelo", precio: 5, stock: 5 },
];
const mostrarInventario = () => {
    const inventario = productos
        .map((p, i) => `${i + 1}. ${p.nombre} - $${p.precio} (${p.stock} disponibles)`)
        .join("\n");
    alert(inventario);
};
const comprarProducto = (codigo) => {
    const index = codigo - 1;
    if (index < 0 || index >= productos.length || isNaN(index)) {
        alert("Código inválido. Ingrese un número entre 1 y 5.");
        return;
    }
    const producto = productos[index];
    if (producto.stock > 0) {
        producto.stock--;
        alert(`Has comprado ${producto.nombre} por $${producto.precio}.`);
    }
    else {
        const sugerencia = productos.find((p) => p.stock > 0);
        alert(sugerencia
            ? `Producto agotado. Te sugerimos ${sugerencia.nombre}.`
            : "Todos los productos están agotados.");
    }
};
while (true) {
    const opcion = prompt("1. Ver inventario\n2. Comprar producto\n3. Salir");
    if (opcion === null || opcion === "3") {
        alert("Saliendo...");
        break;
    }
    switch (opcion) {
        case "1":
            mostrarInventario();
            break;
        case "2":
            const entrada = prompt("Ingrese código del producto (1-5):");
            const codigo = entrada !== null ? parseInt(entrada) : NaN;
            if (!isNaN(codigo))
                comprarProducto(codigo);
            break;
        default:
            alert("Opción inválida.");
    }
}
