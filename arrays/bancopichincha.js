let saldo = 1000;
let transacciones = []; 

const registrarTransaccion = (tipo, monto) => {
    transacciones.push({ tipo, monto, fecha: new Date().toLocaleString() });
    if (transacciones.length > 5) transacciones.shift();  // Máximo 5 registros
};

const mostrarSaldo = () => alert(`Tu saldo actual es: $${saldo}`);

const depositar = (monto) => {
    if (monto > 0) {
        saldo += monto;
        registrarTransaccion("Depósito", monto);
        alert(`Depósito exitoso. Nuevo saldo: $${saldo}`);
    } else {
        alert("Monto inválido.");
    }
};

const retirar = (monto) => {
    if (monto > saldo) alert("Saldo insuficiente.");
    else if (monto > 500) alert("No puedes retirar más de $500 en una sola transacción.");
    else {
        saldo -= monto;
        registrarTransaccion("Retiro", -monto);
        alert(`Retiro exitoso. Nuevo saldo: $${saldo}`);
    }
};

const mostrarTransacciones = () => {
    let historial = transacciones.map(`(t, i) => ${i + 1}. ${t.tipo}: $${t.monto} - ${t.fecha}).join("\n"`);
    alert(historial || "No hay transacciones aún.");
};

while (true) {
    let opcion = prompt("1. Consultar saldo\n2. Depositar\n3. Retirar\n4. Ver transacciones\n5. Salir");

    if (opcion === "1") mostrarSaldo();
    else if (opcion === "2") depositar(parseFloat(prompt("Ingrese monto a depositar:")));
    else if (opcion === "3") retirar(parseFloat(prompt("Ingrese monto a retirar:")));
    else if (opcion === "4") mostrarTransacciones();
    else if (opcion === "5") {
        alert("Saliendo...");
        break;
    } else alert("Opción inválida.");
}