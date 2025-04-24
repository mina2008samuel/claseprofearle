let cola = [];  // Array que almacena clientes

const agregarCliente = (nombre) => {
    if (cola.length < 7) {
        cola.push(nombre);
        alert(`${nombre} ha sido agregado a la cola.`);
    } else alert("La cola está llena.");
};

const atenderCliente = () => {
    if (cola.length > 0) alert(`Atendiendo a: ${cola.shift()}`);
    else alert("No hay clientes en la cola.");
};

const mostrarCola = () => alert(`Clientes en cola: ${cola.join(", ") || "Ninguno"}`);

while (true) {
    let opcion = prompt("1. Agregar cliente\n2. Atender cliente\n3. Ver cola\n4. Salir");

    if (opcion === "1") agregarCliente(prompt("Ingrese el nombre del cliente:"));
    else if (opcion === "2") atenderCliente();
    else if (opcion === "3") mostrarCola();
    else if (opcion === "4") {
        alert("Saliendo...");
        break;
    } else alert("Opción inválida.");
}