let productos = [
    { nombre: "Galletas", precio: 10, stock: 3 },
    { nombre: "Refresco", precio: 20, stock: 2 },
    { nombre: "Chocolate", precio: 15, stock: 5 },
    { nombre: "Papas", precio: 12, stock: 1 },
    { nombre: "Caramelo", precio: 5, stock: 5 }
];

const mostrarInventario = () => {
    let inventario = productos
        .map((p, i) => `${i + 1}. ${p.nombre} - $${p.precio} (${p.stock} disponibles)`)
        .join("\n");
    alert(inventario);
};

const comprarProducto = (codigo) => {
    let index = codigo - 1;
    if (index < 0 || index >= productos.length || isNaN(index)) {
        alert("Código inválido. Ingrese un número entre 1 y 5.");
        return;
    }

    let producto = productos[index];

    if (producto.stock > 0) {
        producto.stock--;
        alert(`Has comprado ${producto.nombre} por $${producto.precio}.`);
    } else {
        let sugerencia = productos.find(p => p.stock > 0);
        alert(sugerencia ? `Producto agotado. Te sugerimos ${sugerencia.nombre}.` : "Todos los productos están agotados.");
    }
};

while (true) {
    let opcion = prompt("1. Ver inventario\n2. Comprar producto\n3. Salir");

    if (opcion === "1") mostrarInventario();
    else if (opcion === "2") {
        let codigo = parseInt(prompt("Ingrese código del producto (1-5):"));
        if (!isNaN(codigo)) comprarProducto(codigo);
    }
    else if (opcion === "3") {
        alert("Saliendo...");
        break;
    } 
    else alert("Opción inválida.");
}
