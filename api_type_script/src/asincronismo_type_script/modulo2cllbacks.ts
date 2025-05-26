interface Datos {
  id: number;
  nombre: string;
}

function obtenerDatos1(callback: (datos: Datos) => void): void {
  setTimeout(() => {
    const datos: Datos = { id: 1, nombre: "Juan" };
    callback(datos);
  }, 2000);
}

function procesarDatos(datos: Datos): void {
  console.log("Datos procesados:", datos);
}

obtenerDatos1(procesarDatos);
console.log("Esperando datos...");
