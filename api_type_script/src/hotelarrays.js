"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.liberar = exports.reservas = exports.ocupaciones = exports.TOTAL_HABITACIONES = void 0;
exports.TOTAL_HABITACIONES = 5;
let habitaciones = Array(exports.TOTAL_HABITACIONES).fill(0);
const ocupaciones = () => {
    let ocupacion = "Habitaciones:\n";
    for (let i = 0; i < habitaciones.length; i++) {
        ocupacion += `Habitación ${i + 1}: ${habitaciones[i] === 0 ? "Desocupada" : "Ocupada"}\n`;
    }
    alert(ocupacion);
};
exports.ocupaciones = ocupaciones;
const reservas = (n) => {
    if (n < 1 || n > exports.TOTAL_HABITACIONES) {
        alert(`No poseemos ese número de habitación, por favor digite un número entre (1-${exports.TOTAL_HABITACIONES})`);
    }
    else if (habitaciones[n - 1] === 1) {
        alert(`La habitación ${n} se encuentra Ocupada...`);
    }
    else {
        alert(`La habitación ${n} se encuentra Desocupada...\nLa reserva se realizó con éxito...`);
        habitaciones[n - 1] = 1;
    }
};
exports.reservas = reservas;
const liberar = (n) => {
    if (n < 1 || n > exports.TOTAL_HABITACIONES) {
        alert(`No poseemos ese número de habitación, por favor digite un número entre (1-${exports.TOTAL_HABITACIONES})`);
    }
    else if (habitaciones[n - 1] === 0) {
        alert(`La habitación ${n} ya se encuentra Desocupada...`);
    }
    else {
        alert(`La habitación ${n} se ha Desocupado...`);
        habitaciones[n - 1] = 0;
    }
};
exports.liberar = liberar;
while (true) {
    const input = prompt("Digite:\n(1) para consultar disponibilidad\n(2) para realizar una reserva\n(3) para desocupar una habitación\n(4) para salir");
    if (input === null || input === "4") {
        alert("Gracias por usar el sistema de reservas. ¡Hasta pronto!");
        break;
    }
    const consulta = parseInt(input);
    if (consulta === 1) {
        (0, exports.ocupaciones)();
    }
    else if (consulta === 2) {
        const habStr = prompt("Bienvenido... Digite cuál es la habitación que desea (1 - 5)");
        const hab = habStr !== null ? parseInt(habStr) : NaN;
        if (!isNaN(hab))
            (0, exports.reservas)(hab);
    }
    else if (consulta === 3) {
        const habStr = prompt("Bienvenido... Digite cuál es la habitación que desea Desocupar (1 - 5)");
        const hab = habStr !== null ? parseInt(habStr) : NaN;
        if (!isNaN(hab))
            (0, exports.liberar)(hab);
    }
    else {
        alert("Opción inválida. Por favor, ingrese un número válido.");
    }
}
