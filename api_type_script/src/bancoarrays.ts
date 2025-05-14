let saldo: number = 1000;

type Transaccion = {
  tipo: string;
  monto: number;
  fecha: string;
};

let transacciones: Transaccion[] = [];

const registrarTransaccion = (tipo: string, monto: number): void => {
  transacciones.push({ tipo, monto, fecha: new Date().toLocaleString() });
  if (transacciones.length > 5) transacciones.shift(); // Solo 5 últimas transacciones
};

const mostrarSaldo = (): void => {
  alert(`Tu saldo actual es: $${saldo}`);
};

const depositar = (monto: number): void => {
  if (monto > 0) {
    saldo += monto;
    registrarTransaccion("Depósito", monto);
    alert(`Depósito exitoso. Nuevo saldo: $${saldo}`);
  } else {
    alert("Monto inválido.");
  }
};

const retirar = (monto: number): void => {
  if (monto > saldo) {
    alert("Saldo insuficiente.");
  } else if (monto > 500) {
    alert("No puedes retirar más de $500 en una sola transacción.");
  } else {
    saldo -= monto;
    registrarTransaccion("Retiro", -monto);
    alert(`Retiro exitoso. Nuevo saldo: $${saldo}`);
  }
};

const mostrarTransacciones = (): void => {
  if (transacciones.length === 0) {
    alert("No hay transacciones aún.");
    return;
  }

  const historial = transacciones
    .map((t, i) => `${i + 1}. ${t.tipo}: $${t.monto} - ${t.fecha}`)
    .join("\n");

  alert(historial);
};

while (true) {
  const opcion = prompt(
    "1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Ver transacciones\n5. Salir"
  );

  if (opcion === null || opcion === "5") {
    alert("Saliendo...");
    break;
  }

  switch (opcion) {
    case "1":
      mostrarSaldo();
      break;
    case "2":
      const montoDep = parseFloat(prompt("Ingrese monto a depositar:") || "0");
      if (!isNaN(montoDep)) depositar(montoDep);
      break;
    case "3":
      const montoRet = parseFloat(prompt("Ingrese monto a retirar:") || "0");
      if (!isNaN(montoRet)) retirar(montoRet);
      break;
    case "4":
      mostrarTransacciones();
      break;
    default:
      alert("Opción inválida.");
  }
}
