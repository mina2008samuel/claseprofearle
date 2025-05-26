interface Datos {
  id: number;
  nombre: string;
}

function obtenerDatos2(): Promise<Datos> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true;
      if (exito) {
        resolve({ id: 1, nombre: "María" });
      } else {
        reject("Error al obtener los datos");
      }
    }, 2000);
  });
}

obtenerDatos2()
  .then(datos => console.log("Datos obtenidos:", datos))
  .catch(error => console.error(error));

console.log("Esperando datos...");
