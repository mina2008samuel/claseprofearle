let cola: string[] = []; // Array que almacena clientes

const agregarCliente = (nombre: string | null): void => {
  if (!nombre) {
    alert("Nombre inválido.");
    return;
  }

  if (cola.length < 7) {
    cola.push(nombre);
    alert(`${nombre} ha sido agregado a la cola.`);
  } else {
    alert("La cola está llena.");
  }
};

const atenderCliente = (): void => {
  if (cola.length > 0) {
    const clienteAtendido = cola.shift();
    alert(`Atendiendo a: ${clienteAtendido}`);
  } else {
    alert("No hay clientes en la cola.");
  }
};

const mostrarCola = (): void => {
  const mensaje = cola.length > 0 ? cola.join(", ") : "Ninguno";
  alert(`Clientes en cola: ${mensaje}`);
};

while (true) {
  const opcion: string | null = prompt(
    "1. Agregar cliente\n2. Atender cliente\n3. Ver cola\n4. Salir"
  );

  if (opcion === null || opcion === "4") {
    alert("Saliendo...");
    break;
  }

  switch (opcion) {
    case "1":
      const nombreCliente = prompt("Ingrese el nombre del cliente:");
      agregarCliente(nombreCliente);
      break;
    case "2":
      atenderCliente();
      break;
    case "3":
      mostrarCola();
      break;
    default:
      alert("Opción inválida.");
  }
}
