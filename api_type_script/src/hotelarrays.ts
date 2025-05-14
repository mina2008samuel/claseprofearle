export const TOTAL_HABITACIONES: number = 5;
let habitaciones: number[] = Array(TOTAL_HABITACIONES).fill(0);

 export const ocupaciones = (): void => {
  let ocupacion = "Habitaciones:\n";
  for (let i = 0; i < habitaciones.length; i++) {
    ocupacion += `Habitación ${i + 1}: ${habitaciones[i] === 0 ? "Desocupada" : "Ocupada"}\n`;
  }
  alert(ocupacion);
};

export const reservas = (n: number): void => {
  if (n < 1 || n > TOTAL_HABITACIONES) {
    alert(`No poseemos ese número de habitación, por favor digite un número entre (1-${TOTAL_HABITACIONES})`);
  } else if (habitaciones[n - 1] === 1) {
    alert(`La habitación ${n} se encuentra Ocupada...`);
  } else {
    alert(`La habitación ${n} se encuentra Desocupada...\nLa reserva se realizó con éxito...`);
    habitaciones[n - 1] = 1;
  }
};

export const liberar = (n: number): void => {
  if (n < 1 || n > TOTAL_HABITACIONES) {
    alert(`No poseemos ese número de habitación, por favor digite un número entre (1-${TOTAL_HABITACIONES})`);
  } else if (habitaciones[n - 1] === 0) {
    alert(`La habitación ${n} ya se encuentra Desocupada...`);
  } else {
    alert(`La habitación ${n} se ha Desocupado...`);
    habitaciones[n - 1] = 0;
  }
};

while (true) {
  const input: string | null = prompt(
    "Digite:\n(1) para consultar disponibilidad\n(2) para realizar una reserva\n(3) para desocupar una habitación\n(4) para salir"
  );

  if (input === null || input === "4") {
    alert("Gracias por usar el sistema de reservas. ¡Hasta pronto!");
    break;
  }

const consulta: number = parseInt(input);

  if (consulta === 1) {
    ocupaciones();
  } else if (consulta === 2) {
    const habStr: string | null = prompt("Bienvenido... Digite cuál es la habitación que desea (1 - 5)");
    const hab: number = habStr !== null ? parseInt(habStr) : NaN;
    if (!isNaN(hab)) reservas(hab);
  } else if (consulta === 3) {
    const habStr: string | null = prompt("Bienvenido... Digite cuál es la habitación que desea Desocupar (1 - 5)");
    const hab: number = habStr !== null ? parseInt(habStr) : NaN;
    if (!isNaN(hab)) liberar(hab);
  } else {
    alert("Opción inválida. Por favor, ingrese un número válido.");
  }
}
