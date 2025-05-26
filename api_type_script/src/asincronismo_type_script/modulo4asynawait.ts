interface Datos {
  id: number;
  nombre: string;
}

async function obtenerYProcesarDatos1(): Promise<void> {
  try {
    const datos = await obtenerDatos();
    console.log("Datos obtenidos:", datos);
    const resultado = await procesarDatos(datos);
    console.log("Resultado:", resultado);
  } catch (error) {
    console.error("Error:", error);
  }
}

function obtenerDatos(): Promise<Datos> {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, nombre: "Ana" }), 2000);
  });
}

function procesarDatos1(datos: Datos): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Datos de ${datos.nombre} procesados`), 1000);
  });
}

obtenerYProcesarDatos1();
console.log("Iniciando proceso...");
